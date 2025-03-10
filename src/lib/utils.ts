import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ms from "ms";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeAgo = (
  timestamp: Date | null,
  {
    withAgo,
  }: {
    withAgo?: boolean;
  } = {}
): string => {
  if (!timestamp) return "Never";
  const diff = Date.now() - new Date(timestamp).getTime();
  if (diff < 1000) {
    // less than 1 second
    return "Just now";
  } else if (diff > 82800000) {
    // more than 23 hours – similar to how Twitter displays timestamps
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
  return `${ms(diff)}${withAgo ? " ago" : ""}`;
};

export function getRandomItems<T>(array: T[], count: number = 1): T[] {
  const maxStartIndex = array.length - count;
  const startIndex = Math.floor(Math.random() * (maxStartIndex + 1));
  return array.slice(startIndex, startIndex + count);
}

export function getUniqueItems(list: any[]) {
  const unique = new Map(list.map((item) => [item.id, item]));
  return Array.from(unique.values());
}

export function getUserTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export const sanitizeInput = (value: string) => {
  const dangerousPatterns = [
    /<script.*?>.*?<\/script>/gi,
    /<script>/i,
    /javascript:/i,
    /onload=/i,
    /onclick=/i,
    /'.*OR.*'/i,
    /UNION SELECT/i,
  ];

  dangerousPatterns.forEach((pattern) => {
    value = value.replace(pattern, "");
  });

  return value;
};

export function getCountryLocale(locale: string): string {
  const region = regions.find((r) => r.locale === locale);
  return region?.locale.toLowerCase() || "GB";
}

export function getCountryName(locale: string): string {
  const region = regions.find((r) => r.locale === locale);
  return region?.english_name || "United Kingdom";
}

export const regions = [
  {
    locale: "ad",
    english_name: "Andorra",
    native_name: "Andorra",
  },
  {
    locale: "ae",
    english_name: "United Arab Emirates",
    native_name: "الإمارات العربية المتحدة",
  },
  {
    locale: "ag",
    english_name: "Antigua and Barbuda",
    native_name: "Antigua & Barbuda",
  },
  {
    locale: "al",
    english_name: "Albania",
    native_name: "Shqipëria",
  },
  {
    locale: "ao",
    english_name: "Angola",
    native_name: "Angola",
  },
  {
    locale: "ar",
    english_name: "Argentina",
    native_name: "Argentina",
  },
  {
    locale: "at",
    english_name: "Austria",
    native_name: "Österreich",
  },
  {
    locale: "au",
    english_name: "Australia",
    native_name: "Australia",
  },
  {
    locale: "az",
    english_name: "Azerbaijan",
    native_name: "Azərbaycan",
  },
  {
    locale: "ba",
    english_name: "Bosnia and Herzegovina",
    native_name: "Bosna i Hercegovina",
  },
  {
    locale: "bb",
    english_name: "Barbados",
    native_name: "Barbados",
  },
  {
    locale: "be",
    english_name: "Belgium",
    native_name: "België",
  },
  {
    locale: "bf",
    english_name: "Burkina Faso",
    native_name: "Burkina Faso",
  },
  {
    locale: "bg",
    english_name: "Bulgaria",
    native_name: "България",
  },
  {
    locale: "bh",
    english_name: "Bahrain",
    native_name: "البحرين",
  },
  {
    locale: "bm",
    english_name: "Bermuda",
    native_name: "Bermuda",
  },
  {
    locale: "bo",
    english_name: "Bolivia",
    native_name: "Bolivia",
  },
  {
    locale: "br",
    english_name: "Brazil",
    native_name: "Brasil",
  },
  {
    locale: "bs",
    english_name: "Bahamas",
    native_name: "Bahamas",
  },
  {
    locale: "by",
    english_name: "Belarus",
    native_name: "Беларусь",
  },
  {
    locale: "bz",
    english_name: "Belize",
    native_name: "Belize",
  },
  {
    locale: "ca",
    english_name: "Canada",
    native_name: "Canada",
  },
  {
    locale: "cd",
    english_name: "Congo",
    native_name: "République Démocratique du Congo",
  },
  {
    locale: "ch",
    english_name: "Switzerland",
    native_name: "Schweiz",
  },
  {
    locale: "ci",
    english_name: "Côte d’Ivoire",
    native_name: "Côte d’Ivoire",
  },
  {
    locale: "cl",
    english_name: "Chile",
    native_name: "Chile",
  },
  {
    locale: "cm",
    english_name: "Cameroon",
    native_name: "Cameroun",
  },
  {
    locale: "co",
    english_name: "Colombia",
    native_name: "Colombia",
  },
  {
    locale: "cr",
    english_name: "Costa Rica",
    native_name: "Costa Rica",
  },
  {
    locale: "cu",
    english_name: "Cuba",
    native_name: "Cuba",
  },
  {
    locale: "cv",
    english_name: "Cape Verde",
    native_name: "Cabo Verde",
  },
  {
    locale: "cy",
    english_name: "Cyprus",
    native_name: "Κύπρος",
  },
  {
    locale: "cz",
    english_name: "Czech Republic",
    native_name: "Česká republika",
  },
  {
    locale: "de",
    english_name: "Germany",
    native_name: "Deutschland",
  },
  {
    locale: "dk",
    english_name: "Denmark",
    native_name: "Danmark",
  },
  {
    locale: "do",
    english_name: "Dominican Republic",
    native_name: "República Dominicana",
  },
  {
    locale: "dz",
    english_name: "Algeria",
    native_name: "الجزائر",
  },
  {
    locale: "ec",
    english_name: "Ecuador",
    native_name: "Ecuador",
  },
  {
    locale: "ee",
    english_name: "Estonia",
    native_name: "Eesti",
  },
  {
    locale: "eg",
    english_name: "Egypt",
    native_name: "مصر",
  },
  {
    locale: "es",
    english_name: "Spain",
    native_name: "España",
  },
  {
    locale: "fi",
    english_name: "Finland",
    native_name: "Suomi",
  },
  {
    locale: "fr",
    english_name: "France",
    native_name: "France",
  },
  {
    locale: "en",
    english_name: "United Kingdom",
    native_name: "United Kingdom",
  },
  {
    locale: "hk",
    english_name: "Hong Kong",
    native_name: "香港",
  },
  {
    locale: "in",
    english_name: "India",
    native_name: "भारत",
  },
  {
    locale: "it",
    english_name: "Italy",
    native_name: "Italia",
  },
  {
    locale: "jp",
    english_name: "Japan",
    native_name: "日本",
  },
  {
    locale: "kr",
    english_name: "South Korea",
    native_name: "대한민국",
  },
];

export const locales = [
  ...regions.map(({ locale }) => locale.toLowerCase()),
] as const;

export const hexToHSL = (hex: string): string => {
  hex = hex.replace(/^#/, "");

  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
  }

  return `${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
};
