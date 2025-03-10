import LanguageSwitcher from "@/components/global/language-switcher/LanguageSwitcher";
import Mode from "@/components/global/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SettingsIcon } from "lucide-react";

export const Setting = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 rounded-full flex hover:rotate-45 duration-300"
          aria-label="Settings">
          <SettingsIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex gap-4 items-center w-fit" align="end">
        <Mode />
        <LanguageSwitcher />
      </PopoverContent>
    </Popover>
  );
};
