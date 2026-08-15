import { useDarkMode } from '../contexts/DarkModeContext';
import { useThemeColors } from '../hooks/useThemeColors';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../config/socialLinks';

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-auto" style={{ backgroundColor: isDarkMode ? themeColors.background.gradientEnd : themeColors.colors.pink[50] }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <p className="font-semibold" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[700] }}>Demilade Adewole</p>
            <p className="text-sm" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[700] }}>© {currentYear} · Software Engineer</p>
          </div>

          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-3 rounded-full" style={{ backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white, color: themeColors.colors.pink[500], border: `1px solid ${themeColors.colors.pink[200]}` }} aria-label="Back to top">
            <ArrowUp size={20} />
          </button>

          <div className="flex items-center gap-3">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2"><Github size={20} /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2"><Linkedin size={20} /></a>
            <a href={`mailto:${socialLinks.email}`} aria-label="Email" className="p-2"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
