import { ArrowDownToLine, ArrowRight, Bot, BookOpen, BriefcaseBusiness, Code2, Github, GraduationCap, Heart, Linkedin, Mail, MapPin, Menu, Sparkles, Users, X } from 'lucide-react';
import { useState } from 'react';
import './App.css';

const linkedin = 'https://www.linkedin.com/in/demilade-adewole/';
const github = 'https://github.com/DemiladeAdewole';
const email = 'demilade.adewole1@gmail.com';
const profilePhoto = 'https://avatars.githubusercontent.com/u/179845679?v=4&s=1000';

const passions = [
  {
    icon: <Code2 size={24} />,
    title: 'Application Modernization',
    text: "Breathing new life into legacy systems so they're faster, easier to maintain, and ready for what's next."
  },
  {
    icon: <Bot size={24} />,
    title: 'Automation',
    text: 'Building tools and automations that remove repetitive work and give people back their time.'
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Continuous Learning',
    text: 'Tech moves fast. I stay curious, explore new ideas, and genuinely enjoy the process of growing.'
  },
  {
    icon: <Users size={24} />,
    title: 'Real Impact',
    text: "I care about building technology that solves real problems and makes someone's day-to-day better."
  }
];

const experience = [
  {
    role: 'Agile Developer',
    company: 'Freddie Mac',
    period: 'Oct 2024 – Present',
    location: 'McLean, VA',
    summary: 'Modernizing enterprise applications, automating operational work, supporting ETL workflows, and helping keep critical financial reporting systems reliable.'
  },
  {
    role: 'Data Analyst Intern',
    company: 'Northern Virginia Families for Safe Streets',
    period: 'Aug 2024 – Oct 2024',
    location: 'Alexandria, VA',
    summary: 'Worked with transportation and public data, cleaning and restructuring datasets to make analysis more useful and accessible.'
  },
  {
    role: 'Software Engineering Intern',
    company: 'Thorben Consulting',
    period: 'Jan 2023 – Aug 2023',
    location: 'Arlington, VA',
    summary: 'Built Python tools, worked with REST APIs and SQL pipelines, and practiced test-driven development and CI/CD.'
  }
];

const skills = [
  'Java', 'Python', 'SQL', 'TypeScript', 'Angular', 'Spring Boot', 'REST APIs', 'ETL', 'DataStage',
  'Control-M', 'CI/CD', 'Linux', 'Git', 'Automation', 'TDD', 'Mockito', 'GitHub Copilot', 'Amazon Q'
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu}>Demilade Adewole <span>✦</span></a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="resume-nav" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>
            <ArrowDownToLine size={16} /> Resume
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section-new">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16} /> Curious by nature. Impact-driven by choice.</div>
            <h1>Hi, I&apos;m <span>Demilade Adewole</span></h1>
            <h2>Software Engineer <i /> Application Modernization</h2>
            <p className="hero-description-new">
              I modernize legacy systems, automate the repetitive, and build software that makes life easier for real people. Right now, I&apos;m focused on building a career around impactful systems, continuous learning, and solving problems that actually matter.
            </p>

            <div className="contact-strip">
              <a href={`mailto:${email}`}><Mail size={19} /> {email}</a>
              <span className="separator" />
              <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn</a>
              <span className="separator" />
              <a href={github} target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a>
            </div>

            <div className="hero-actions">
              <a className="primary-button" href="#experience">View my work <ArrowRight size={18} /></a>
              <a className="secondary-button" href={`mailto:${email}`}>Get in touch <Mail size={18} /></a>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <img src={profilePhoto} alt="Demilade Adewole" className="portrait" />
            <div className="doodle doodle-top" aria-hidden="true">···<br/>···<br/>···</div>
            <div className="doodle doodle-bottom" aria-hidden="true">···<br/>···<br/>···</div>
            <span className="portrait-note">curious by<br/>nature ↗</span>
          </div>
        </section>

        <section id="about" className="passion-section">
          <div className="section-heading centered">
            <span>What I&apos;m <em>passionate</em> about <Heart size={22} /></span>
          </div>
          <div className="passion-grid">
            {passions.map((item) => (
              <article className="passion-item" key={item.title}>
                <div className="passion-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-story">
          <div>
            <p className="section-kicker">About me</p>
            <h2>I build, automate, and modernize.</h2>
            <div className="story-line" />
            <p>I&apos;ve always been drawn to the part of tech where you take something complicated, outdated, or repetitive and make it work better — faster, cleaner, and smarter.</p>
            <p>I&apos;m passionate about application modernization, automation, and learning new ways to solve real problems. I like work that is practical and useful: technology that saves time, makes a process easier, or gives people something they can actually rely on.</p>
          </div>

          <aside className="passion-card">
            <h3><Heart size={20} /> What matters to me</h3>
            <ul>
              <li>Modernizing old systems into stronger, more maintainable applications</li>
              <li>Automation that saves time and removes the boring stuff</li>
              <li>Solving real problems with clean, practical solutions</li>
              <li>Continuous learning and growing in tech</li>
              <li>Building technology that actually makes an impact</li>
            </ul>
          </aside>
        </section>

        <section id="experience" className="experience-section">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2>Where I&apos;ve been building</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={`${item.company}-${item.role}`}>
                <div className="experience-icon"><BriefcaseBusiness size={22} /></div>
                <div className="experience-main">
                  <div className="experience-topline">
                    <div>
                      <h3>{item.role}</h3>
                      <h4>{item.company}</h4>
                    </div>
                    <div className="experience-meta">
                      <span>{item.period}</span>
                      <span><MapPin size={14} /> {item.location}</span>
                    </div>
                  </div>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section-new">
          <div className="section-heading centered">
            <p className="section-kicker">Skills</p>
            <h2>Tools I like working with</h2>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>

          <div className="education-row">
            <div className="education-card">
              <GraduationCap size={24} />
              <div><strong>George Mason University</strong><span>M.S. Computer Science · 2026</span></div>
            </div>
            <div className="education-card">
              <GraduationCap size={24} />
              <div><strong>University of Virginia</strong><span>B.S. Computer Science · Minor in Religious Studies</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section-new">
          <div>
            <p className="section-kicker">Let&apos;s connect</p>
            <h2>Have an idea, opportunity, or just want to say hi?</h2>
            <p>I&apos;m always open to a good conversation about engineering, modernization, automation, and what&apos;s next.</p>
          </div>
          <a className="primary-button" href={`mailto:${email}`}>Send me an email <Mail size={18} /></a>
        </section>
      </main>

      <footer className="new-footer">
        <span>© 2026 Demilade Adewole</span>
        <div><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={github} target="_blank" rel="noreferrer">GitHub</a></div>
      </footer>
    </div>
  );
}

export default App;
