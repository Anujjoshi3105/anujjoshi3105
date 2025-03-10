"use client";
import { PageTemplate } from "@/components/Template";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("contact");
  return (
    <>
      <PageTemplate title={t("title")} subtitle={t("subtitle")} />
      <div className="py-4 sm:py-12 flex md:flex-row-reverse flex-col gap-8 justify-between">
        <ContactInfo />
        <Suspense
          fallback={
            <Skeleton className="md:w-[600px] w-full h-[400px] flex items-center justify-center">
              <div className="h-20 w-20 animate-spin rounded-full border-4 border-t-theme" />
            </Skeleton>
          }>
          <ContactForm />
        </Suspense>
      </div>
    </>
  );
}
