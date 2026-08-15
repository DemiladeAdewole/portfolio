import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { socialLinks } from '../../config/socialLinks';
import profileImageBase64 from '../../assets/demilade-profile.txt?raw';

const About = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const roles = ['Agile Developer', 'Software Engineer', 'Full-Stack Developer', 'Automation Builder'];
  const profileSrc = `data:image/webp;base64,${profileImageBase64.trim()}`;

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
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <p
              className="text-sm md:text-base font-semibold tracking-[0.22em] uppercase mb-4"
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

            <div className="flex flex-wrap gap-2 mb-7">
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

            <div className="space-y-4 max-w-3xl mb-8">
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: themeColors.text.secondary }}
              >
                I&apos;ve always been drawn to the part of tech where you take something complicated, outdated, or repetitive and make it work better. I like digging into how a system works, finding the friction, and building something cleaner on the other side.
              </p>

              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: themeColors.text.secondary }}
              >
                I&apos;m especially passionate about application modernization, automation, and learning new ways to solve real problems. For me, the best kind of engineering is practical: work that saves people time, makes a process easier, or turns an idea into something people can actually rely on.
              </p>
            </div>

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

          <div className="relative max-w-md mx-auto lg:mx-0 w-full">
            <div
              className="absolute -inset-3 rounded-[2.2rem] blur-2xl opacity-40"
              style={{ backgroundColor: themeColors.colors.pink[300] }}
              aria-hidden="true"
            />

            <div
              className="relative rounded-[2rem] p-4 md:p-5 shadow-2xl"
              style={{
                backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
                border: `1px solid ${themeColors.colors.pink[200]}`
              }}
            >
              <div className="relative overflow-hidden rounded-[1.55rem] aspect-square">
                <img
                  src={profileSrc}
                  alt="Demilade Adewole"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 34%' }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-28"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(17, 24, 39, 0.55) 100%)'
                  }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xl font-semibold">Demilade Adewole</p>
                  <p className="text-sm text-white/85">Building, learning, and making things work better.</p>
                </div>
              </div>

              <div className="pt-5 px-1 pb-1">
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 p-2 rounded-xl shrink-0"
                    style={{
                      backgroundColor: isDarkMode ? themeColors.colors.dark[700] : themeColors.colors.pink[50],
                      color: themeColors.colors.pink[500]
                    }}
                  >
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: themeColors.text.primary }}>
                      What I care about
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: themeColors.text.secondary }}>
                      Growing as an engineer, solving problems that actually matter, and creating technology that feels useful instead of complicated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -right-3 md:-right-6 px-4 py-2 rounded-full text-sm font-semibold shadow-lg rotate-2"
              style={{
                backgroundColor: themeColors.colors.pink[500],
                color: themeColors.colors.white
              }}
            >
              curious by nature ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
