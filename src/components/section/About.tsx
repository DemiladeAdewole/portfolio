import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { socialLinks } from '../../config/socialLinks';

const About = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const roles = ['Agile Developer', 'Software Engineer', 'Full-Stack Developer', 'Automation Builder'];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24"
      style={{
        background: themeColors.background.sections?.about || themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <p
              className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: themeColors.colors.pink[500] }}
            >
              Software • Fintech • Automation
            </p>

            <h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-5"
              style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.dark[800] }}
            >
              Hi, I&apos;m Demilade Adewole.
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
                    color: themeColors.colors.pink[500],
                    border: `1px solid ${themeColors.colors.pink[200]}`
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
              style={{ color: themeColors.text.secondary }}
            >
              I&apos;m a software engineer focused on modernizing enterprise applications, building reliable automation, and creating data-driven solutions in regulated financial environments. I enjoy turning complex systems into cleaner, faster, and more maintainable experiences.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-action-btn inline-flex items-center gap-2 px-5 py-3"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-action-btn inline-flex items-center gap-2 px-5 py-3"
              >
                <Github size={18} /> GitHub
              </a>
              <Link to="/contact" className="hero-action-btn inline-flex items-center gap-2 px-5 py-3">
                <Mail size={18} /> Contact
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm" style={{ color: themeColors.text.secondary }}>
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> Northern Virginia</span>
              <span className="inline-flex items-center gap-2"><Briefcase size={16} /> Freddie Mac</span>
              <span className="inline-flex items-center gap-2"><GraduationCap size={16} /> M.S. Computer Science</span>
            </div>
          </div>

          <div
            className="rounded-[2rem] p-7 md:p-9 shadow-xl"
            style={{
              backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
              border: `1px solid ${themeColors.colors.pink[200]}`
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: themeColors.colors.pink[500] }}>
              Quick profile
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-sm mb-1" style={{ color: themeColors.text.tertiary }}>Current role</p>
                <p className="text-xl font-semibold" style={{ color: themeColors.text.primary }}>Agile Developer</p>
                <p style={{ color: themeColors.text.secondary }}>Freddie Mac · McLean, VA</p>
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: themeColors.text.tertiary }}>Focus</p>
                <p style={{ color: themeColors.text.secondary }}>Java, Spring Boot, Angular, Python, SQL, ETL, CI/CD, automation and production support.</p>
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: themeColors.text.tertiary }}>Education</p>
                <p className="font-semibold" style={{ color: themeColors.text.primary }}>George Mason University</p>
                <p style={{ color: themeColors.text.secondary }}>M.S. Computer Science, 2026</p>
              </div>
              <div>
                <p className="font-semibold" style={{ color: themeColors.text.primary }}>University of Virginia</p>
                <p style={{ color: themeColors.text.secondary }}>B.S. Computer Science · Minor in Religious Studies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
