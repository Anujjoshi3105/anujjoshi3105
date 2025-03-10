import { useTranslations } from "next-intl";

export default function QuoteSection() {
  const t = useTranslations("quote");

  return (
    <div className="relative max-w-3xl mx-auto aspect-video flex items-center justify-center">
      <span className="animate-quote bg-theme/30 -z-10 blur-2xl rounded-full dark:blur-[150px] w-80 h-80 absolute" />
      <div className="text-center space-y-8">
        <p className="text-2xl sm:text-3xl md:text-4xl leading-loose text-balance backdrop-blur-sm">
          {t.rich("text", {
            highlight: (chunks) => (
              <span className="text-theme font-semibold">{chunks}</span>
            ),
          })}
        </p>
        <p className="text-sm sm:text-base md:text-lg italic">
          ~ {t("author")}
        </p>
      </div>
    </div>
  );
}
