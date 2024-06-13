import { IconType } from "react-icons";

interface SocialProps {
  title: string;
  name: string;
  link: string;
  icon?: IconType;
}

function Social({ title, name, link, icon: Icon}: SocialProps) {
  return (
    <a href={link} target="_blank" className="md:flex items-center gap-2 justify-center hover:scale-105 transition-all delay-150 group md:text-left text-center">
        {Icon && <Icon className="text-theme text-2xl md:text-3xl group-hover:text-primary my-2 mx-auto" />}
        <div className="items-center hidden sm:block">
            <div className="font-bold text-sm md:text-md">{title}</div>
            <div className="text-sm">{name}</div>
        </div>
    </a>
  )
}

export default Social
