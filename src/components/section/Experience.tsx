import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const experiences = [
    {
      title: 'Agile Developer',
      company: 'Freddie Mac',
      location: 'McLean, VA',
      period: 'Oct 2024 – Present',
      description: [
        'Lead modernization work for legacy Java/Struts applications using Angular and Spring Boot.',
        'Build Perl and Python automation to reduce repetitive operational work and manual intervention.',
        'Design and maintain ETL workflows with SQL, Control-M, and DataStage for large financial datasets.',
        'Support production incidents, root-cause analysis, compliance activities, validation, and release readiness for regulatory reporting systems.'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'Northern Virginia Families for Safe Streets',
      location: 'Alexandria, VA',
      period: 'Aug 2024 – Oct 2024',
      description: [
        'Analyzed transportation and public datasets using Excel and SQL.',
        'Cleaned and restructured data to improve usability for reporting and analysis.'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Thorben Consulting',
      location: 'Arlington, VA',
      period: 'Jan 2023 – Aug 2023',
      description: [
        'Built a Python command-line chatbot and supported REST API and SQL-based workflows.',
        'Used test-driven development, unit testing, and CI/CD practices to improve reliability.'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Relish',
      location: 'Charlottesville, VA',
      period: 'Jun 2022 – Aug 2022',
      description: [
        'Cleaned and ingested more than 3,000 job records using SQL.',
        'Contributed to improvements in recommendation matching and data quality.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Experience</h2>
        <p className="text-center max-w-2xl mx-auto mb-10" style={{ color: themeColors.text.secondary }}>
          Building software, automation, and data solutions across fintech, consulting, transportation safety, and data science.
        </p>

        <div className="max-w-4xl mx-auto space-y-5">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div>
                    <CardTitle className="text-2xl" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-1">{exp.company}</p>
                  </div>
                  <div className="md:text-right">
                    <div className="flex md:justify-end items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex md:justify-end items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: themeColors.primary }}>•</span>
                      <span className="text-sm md:text-base" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
