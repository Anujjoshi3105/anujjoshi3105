import { IconType } from "react-icons";

interface SocialProps {
  title: string;
  name: string;
  link: string;
  icon?: IconType;
}

function Social({ title, name, link, icon: Icon }: SocialProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="group md:flex items-center justify-center gap-2 hover:scale-105 transition-all duration-150 md:text-left text-center">
      {Icon && (
        <Icon className="text-theme text-2xl md:text-3xl group-hover:text-primary my-2 mx-auto" />
      )}
      <div className="items-center sm:block">
        <p className="font-bold text-sm md:text-md">{title}</p>
        <p className="text-xs">{name}</p>
      </div>
    </a>
  );
}

export default Social;
