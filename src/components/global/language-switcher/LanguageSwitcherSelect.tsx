"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { regions, getCountryLocale, getCountryName } from "@/lib/utils";
import { useParams } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import { toast } from "sonner";

interface LanguageSwitcherProps {
  defaultValue: string;
  label: string;
}

export default function LanguageSwitcherSelect({
  defaultValue,
  label,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLanguageChange = (locale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: getCountryLocale(locale) as Locale }
    );

    setTimeout(() => {
      toast.success("Language changed successfully", {
        description: `You have successfully changed your region to ${getCountryName(
          locale
        )}`,
      });
    }, 500);
  };

  return (
    <Select defaultValue={defaultValue} onValueChange={handleLanguageChange}>
      <SelectTrigger
        className="text-xs focus:ring-0 focus:ring-offset-0"
        aria-label={label}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {regions.map((region, index) => (
          <SelectItem key={index} value={region.locale}>
            <div className="text-xs flex items-center justify-center gap-2">
              <ReactCountryFlag
                countryCode={
                  region.locale === "en" ? "GB" : region.locale.toUpperCase()
                }
                svg
                aria-label={region.english_name}
              />
              <span>{region.english_name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
