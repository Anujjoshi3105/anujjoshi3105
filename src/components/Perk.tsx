import { Link } from "@/i18n/routing";
import { IconType } from "react-icons";
import { Badge } from "./ui/badge";

interface PerkProps {
  value?: string | number;
  link?: string;
  title: string;
  icon?: IconType;
  subtitle?: string;
}

function Perk({ value, link, title, icon: Icon, subtitle }: PerkProps) {
  return (
    <Link href={link || "#"} target={link ? "_blank" : "_self"}>
      <div className="p-4 text-center m-1 space-y-1 bg-muted hover:bg-foreground rounded-md hover:scale-[1.02] transition-all duration-150 group">
        {Icon && (
          <Icon className="text-theme text-3xl md:text-4xl my-4 mx-auto group-hover:scale-110" />
        )}
        {subtitle && <Badge>{subtitle}</Badge>}
        <div className="font-semibold text-md md:text-lg tracking-[0.05rem] leading-5 text-nowrap capitalize">
          {value}+ {title}
        </div>
      </div>
    </Link>
  );
}

export default Perk;
