import { FaPalette } from "react-icons/fa";
import { useTheme } from "@/providers/ThemeProvider";
const Theme = () => {
  const { toggleTheme } = useTheme();
  return (
    <FaPalette
      id="to-top-Btn"
      onClick={() => {
        toggleTheme();
      }}
      className="fixed z-50 bottom-8 p-2 text-lg right-6 w-10 h-10 rounded-full shadow-lg hover:bg-background hover:text-theme bg-theme text-background transition-all ease-in-out duration-150 hover:scale-150 cursor-pointer"
    />
  );
};

export default Theme;
