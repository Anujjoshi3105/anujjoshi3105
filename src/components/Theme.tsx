import { FaPalette } from 'react-icons/fa';
import { useTheme } from "@/components/ThemeContext"
import { motion } from 'framer-motion';
const Theme = () => {
  const { toggleTheme } = useTheme();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
      <FaPalette
        id="to-top-button"
        onClick={() => {
          toggleTheme();
          goToTop();
        }}
        className="fixed z-50 bottom-8 p-2 right-10 lg:right-8 w-10 h-10 rounded-full shadow-lg hover:bg-background hover:text-theme bg-theme text-background duration-150 hover:scale-110 cursor-pointer"
      />
    </motion.div> 
  );
};

export default Theme;
