import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  link: string;
  className?: string;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ text, className = '', icon: Icon }) => {
  return (
    <div className={`inline-flex text-sm sm:text-md md:text-lg text-center no-wrap relative items-center gap-2 px-4 py-2 focus:outline-none rounded-md transition-all delay-100 ${className}`}
      >
        {Icon && <Icon />}
        {text}
    </div>
  );
};

export default Button;
