import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Skills = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const groups = [
    { title: 'Languages', items: ['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'C', 'R', 'Perl'] },
    { title: 'Frameworks & Web', items: ['Spring Boot', 'Angular', 'Java Struts', 'REST APIs', 'JSON'] },
    { title: 'Data & Enterprise', items: ['DataStage', 'ETL', 'Control-M', 'RapidSQL', 'Regulatory Reporting'] },
    { title: 'DevOps & Tooling', items: ['CI/CD', 'Git', 'Bitbucket', 'SourceTree', 'Linux/Bash', 'Jira'] },
    { title: 'Engineering Practices', items: ['Agile/Scrum', 'TDD', 'Unit Testing', 'Mockito', 'Root Cause Analysis'] },
    { title: 'AI-Assisted Development', items: ['GitHub Copilot', 'Amazon Q', 'Prompt Engineering', 'LLM-Assisted Development'] }
  ];

  return (
    <section id="skills" className="py-20 min-h-screen" style={{
      background: themeColors.background.sections?.skills || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Skills</h2>
        <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: themeColors.text.secondary }}>
          A mix of full-stack development, enterprise data engineering, automation, production support, and AI-assisted development.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl p-6 shadow-md"
              style={{
                backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
                border: `1px solid ${themeColors.colors.pink[200]}`
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: themeColors.colors.pink[500] }}>{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      backgroundColor: isDarkMode ? themeColors.colors.dark[700] : themeColors.colors.pink[50],
                      color: isDarkMode ? themeColors.colors.white : themeColors.colors.dark[700]
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
