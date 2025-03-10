import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import dotenv from "dotenv";
import { regions } from "../src/lib/utils";

dotenv.config({
  path: __dirname + "/.env",
});

let genAIInstance: GoogleGenerativeAI | null = null;
let modelInstance: any | null = null;

const getGoogleAI = () => {
  if (!genAIInstance) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not defined");
    }
    genAIInstance = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  }
  return genAIInstance;
};

const getModel = () => {
  if (!modelInstance) {
    const genAI = getGoogleAI();
    modelInstance = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  }
  return modelInstance;
};

const loadMessages = (path: string) => {
  try {
    return JSON.parse(fs.readFileSync(path, "utf8"));
  } catch (error) {
    console.error(`Error loading messages from ${path}`);
    throw error;
  }
};

async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {
  if (targetLanguage.toLowerCase() === "english") {
    return text;
  }

  try {
    const model = getModel();
    const prompt = `Translate the following text to ${targetLanguage}. Return only the translated text without quotes or explanations: "${text}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();
  } catch (error) {
    console.error(`Error translating to ${targetLanguage}`);
    return text;
  }
}

async function translateJSON(
  data: Record<string, any> | any[],
  targetLanguage: string
): Promise<Record<string, any> | any[]> {
  if (Array.isArray(data)) {
    return Promise.all(
      data.map(async (item) => {
        if (typeof item === "string") {
          return await translateText(item, targetLanguage);
        } else if (typeof item === "object" && item !== null) {
          return await translateJSON(item, targetLanguage);
        } else {
          return item;
        }
      })
    );
  }

  // Handle objects (original code)
  const translatedData: Record<string, any> = {};

  const entries = Object.entries(data);
  const batchSize = 5;

  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    const translations = await Promise.all(
      batch.map(async ([key, value]) => {
        if (typeof value === "string") {
          const translated = await translateText(value, targetLanguage);
          return [key, translated];
        } else if (Array.isArray(value)) {
          // Handle arrays specifically
          const nestedTranslation = await translateJSON(value, targetLanguage);
          return [key, nestedTranslation];
        } else if (typeof value === "object" && value !== null) {
          const nestedTranslation = await translateJSON(value, targetLanguage);
          return [key, nestedTranslation];
        } else {
          return [key, value];
        }
      })
    );

    translations.forEach(([key, translatedValue]) => {
      translatedData[key] = translatedValue;
    });

    if (i + batchSize < entries.length) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  return translatedData;
}

async function createTranslatedFiles() {
  const sourceFile = "./messages/en.json";
  const outputDir = "./messages";

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const message = loadMessages(sourceFile);

  for (const locale of regions) {
    console.log(`Translating to ${locale.english_name}...`);

    try {
      const translatedData = await translateJSON(message, locale.english_name);
      const outputPath = `${outputDir}/${locale.locale}.json`;

      fs.writeFileSync(outputPath, JSON.stringify(translatedData, null, 2));
      console.log(`✓ Translated file created: ${outputPath}`);
    } catch (error) {
      console.error(`Failed to translate to ${locale.english_name}`);
    }
  }

  console.log("Translation process completed.");
}

if (require.main === module) {
  createTranslatedFiles().catch((error) => {
    console.error("Translation process failed");
    process.exit(1);
  });
}

if (process.argv.includes("-translate")) {
  createTranslatedFiles();
}

export { translateText, translateJSON, createTranslatedFiles, loadMessages };
