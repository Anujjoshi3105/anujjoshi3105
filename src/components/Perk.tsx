import { IconType } from "react-icons";

interface PerkProps {
  title: string;
  icon?: IconType;
}

function Perk({ title, icon: Icon}: PerkProps) {
  return (
    <div className="p-7 text-center m-2 w-36 flex-grow bg-tertiary hover:bg-secondary rounded-md flex-col items-center gap-4 justify-center hover:scale-105 transition-all delay-100 group">
        {Icon && <Icon className="text-theme text-lg sm:text-2xl md:text-3xl my-2 mx-auto group-hover:animate-spinOnce" />}
        <div className="items-center block">
            <div className="font-semibold text-md tracking-[0.05rem] leading-5">{title}</div>
        </div>
    </div>
  )
}

export default Perk
