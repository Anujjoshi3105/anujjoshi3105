import { FaPalette } from 'react-icons/fa';
import { useTheme } from "@/components/ThemeContext"

const Theme = () => {
  const { toggleTheme } = useTheme();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FaPalette
      id="to-top-button"
      onClick={() => {
        toggleTheme();
        goToTop();
      }}
      className="fixed z-50 bottom-8 p-2 right-8 w-10 h-10 rounded-full shadow-lg hover:bg-background hover:text-theme bg-theme text-background duration-150 hover:scale-110 cursor-pointer"
    />
     
  );
};

export default Theme;
