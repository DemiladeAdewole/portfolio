import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from '../DarkModeToggle';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors, withAlpha } from '../../hooks/useThemeColors';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const goTo = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' }
  ];

  return (
    <nav
      className="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 99999,
        padding: '1rem 0',
        borderBottom: `1px solid ${themeColors.navigation.border}`,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        background: withAlpha(isDarkMode ? themeColors.colors.dark[950] : themeColors.colors.pink[50], 0.78)
      }}
    >
      <div className="nav-container">
        <button
          className="signature-name"
          onClick={() => { window.location.href = '/'; }}
          style={{ cursor: 'pointer', color: themeColors.colors.pink[500], background: 'none', border: 'none', WebkitTextFillColor: themeColors.colors.pink[500] }}
          aria-label="Demilade Adewole - Go to homepage"
        >
          Demilade Adewole
        </button>

        <div className="nav-tabs desktop-nav">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => goTo(tab.id)} className="nav-tab" style={{ color: themeColors.text.accent }}>
              {tab.label}
            </button>
          ))}
          <a href="/contact" className="nav-tab" style={{ color: themeColors.text.accent }}>Contact</a>
          <div className="ml-4"><DarkModeToggle checked={isDarkMode} onChange={toggleDarkMode} /></div>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{ background: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white, border: `1px solid ${themeColors.colors.pink[200]}`, borderRadius: '12px', padding: '10px', color: themeColors.colors.pink[500] }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu open" style={{ background: themeColors.navigation.mobile, padding: '1rem' }}>
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => goTo(tab.id)} className="mobile-nav-tab" style={{ color: themeColors.text.accent, width: '100%' }}>
              {tab.label}
            </button>
          ))}
          <a href="/contact" className="mobile-nav-tab" style={{ color: themeColors.text.accent, width: '100%', display: 'block' }}>Contact</a>
          <div className="mt-4 flex justify-center"><DarkModeToggle checked={isDarkMode} onChange={toggleDarkMode} /></div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
