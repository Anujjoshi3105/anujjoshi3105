import { NextIntlClientProvider } from "next-intl";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { DarkProvider } from "@/components/providers/DarkProvider";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Locale, routing } from "@/i18n/routing";
import HolyLoader from "holy-loader";
import { getLangDir } from "rtl-detect";
import { getMessages, getTranslations } from "next-intl/server";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    metadataBase: new URL("https://anujjoshi.netlify.app/"),
    applicationName: "Anuj Joshi",
    title: {
      default: t("title"),
      template: `%s - Anuj Joshi`,
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: { name: "Anuj Joshi", url: "https://anujjoshi.netlify.app/" },
    creator: "Anuj Joshi",
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
    openGraph: {
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      images: [
        {
          url: "https://anujjoshi.netlify.app/logo.png",
          width: 1200,
          height: 630,
          alt: "Anuj Joshi Portfolio Logo",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: "https://anujjoshi.netlify.app/logo.png",
      creator: "@anujjoshi3105",
      site: "@anujjoshi3105",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const direction = getLangDir(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="a-tlC7lxqKDFcOSkl7QSrELzrggflM2cjPn8ishZQs8"
        />
      </head>
      <body
        className={`overflow-x-hidden ${poppins.className}`}
        suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <DarkProvider
              attribute="class"
              enableSystem
              disableTransitionOnChange
              storageKey="station-theme"
              defaultTheme="dark">
              <HolyLoader color="white" />
              <Navbar />
              <main className="lg:mx-[8rem] md:mx-[4rem] my-[3rem] sm:mx-[2rem] mx-6">
                {children}
              </main>
              <Footer />
              <Toaster richColors />
            </DarkProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
