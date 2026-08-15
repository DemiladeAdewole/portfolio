import { useEffect, useState } from 'react';
import { Code2, Bot, BookOpen, Users, Mail, Linkedin, Github, Download } from 'lucide-react';
import { socialLinks } from '../../config/socialLinks';

const passions = [
  {
    icon: Code2,
    title: 'Application Modernization',
    text: "Breathing new life into legacy systems so they're faster, more scalable, and ready for what's next."
  },
  {
    icon: Bot,
    title: 'Automation',
    text: 'Building tools and automations that eliminate repetitive work and give people back their time.'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    text: 'Tech moves fast. I stay curious, explore new things, and enjoy the process of growing.'
  },
  {
    icon: Users,
    title: 'Real Impact',
    text: "I care about building technology that solves real problems and makes someone's day-to-day better."
  }
];

const About = () => {
  const [profileSrc, setProfileSrc] = useState('');

  useEffect(() => {
    fetch('/demilade-profile-current.b64', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error('Profile image failed to load');
        return response.text();
      })
      .then((base64) => setProfileSrc(`data:image/webp;base64,${base64.trim()}`))
      .catch(() => setProfileSrc('https://avatars.githubusercontent.com/u/179845679?v=4&s=1000'));
  }, []);

  return (
    <section id="about" className="bg-[#fffdfd] text-[#1d1b1c]">
      <div className="relative overflow-hidden border-b border-[#f8d8e1]">
        <div className="absolute -top-24 right-12 h-72 w-72 rounded-full bg-[#ffdce7] blur-3xl opacity-60" />
        <div className="absolute bottom-8 left-[49%] hidden lg:grid grid-cols-4 gap-2 opacity-70" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#f598b1]" />)}
        </div>

        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 pb-16 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-28">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-lg bg-[#ffe3ea] px-4 py-2 text-sm font-semibold text-[#262123] shadow-sm">
              <span className="text-[#f25f87]">✦</span>
              Curious by nature. Impact-driven by choice.
            </div>

            <h1 className="mb-5 font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Hi, I&apos;m
              <span className="mt-2 block text-[#ef5f85]">Demilade Adewole</span>
            </h1>

            <p className="mb-6 font-serif text-2xl text-[#2d2729]">
              Software Engineer <span className="text-[#d3a0ad]">|</span> Application Modernization
            </p>

            <p className="max-w-xl text-[1.08rem] leading-8 text-[#5e5960]">
              I modernize legacy systems, automate the repetitive, and build software that makes life easier for real people. Right now, I&apos;m focused on building a career around impactful systems, continuous learning, and solving problems that actually matter.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm font-medium text-[#353034]">
              <a href={`mailto:${socialLinks.email}`} className="inline-flex items-center gap-2 hover:text-[#ef5f85]">
                <Mail size={20} className="text-[#ef5f85]" /> {socialLinks.email}
              </a>
              <span className="hidden h-5 w-px bg-[#e7cbd3] sm:block" />
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#ef5f85]">
                <Linkedin size={20} className="text-[#ef5f85]" /> LinkedIn
              </a>
              <span className="hidden h-5 w-px bg-[#e7cbd3] sm:block" />
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#ef5f85]">
                <Github size={20} className="text-[#ef5f85]" /> GitHub
              </a>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#ef5f85] px-6 py-3.5 font-semibold text-white shadow-[0_12px_28px_rgba(239,95,133,0.28)] transition hover:-translate-y-0.5 hover:bg-[#e6537a]"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-5 rounded-[2.2rem] bg-[#ffdbe5] blur-3xl opacity-75" aria-hidden="true" />
            <div className="absolute -right-7 -top-5 hidden grid-cols-4 gap-2 lg:grid" aria-hidden="true">
              {Array.from({ length: 20 }).map((_, i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#f9b6c7]" />)}
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] bg-[#f6eeee] p-2 shadow-[0_22px_60px_rgba(205,123,147,0.2)] ring-1 ring-[#f4d3dc]">
              {profileSrc ? (
                <img
                  src={profileSrc}
                  alt="Demilade Adewole"
                  className="aspect-[1/1.08] w-full rounded-[1.45rem] object-cover"
                  style={{ objectPosition: 'center 38%' }}
                />
              ) : (
                <div className="aspect-[1/1.08] w-full animate-pulse rounded-[1.45rem] bg-[#f3e7ea]" aria-label="Loading profile photo" />
              )}
              <div className="pointer-events-none absolute bottom-5 right-7 -rotate-6 text-right font-serif text-lg italic leading-6 text-white drop-shadow-md">
                building for<br />people + purpose ♡
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fff7f9] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-semibold text-[#1f1a1c] md:text-5xl">
              What I&apos;m <span className="text-[#ef5f85]">passionate</span> about <span className="text-[#ef8eaa]">♡</span>
            </h2>
            <div className="mx-auto mt-3 h-[2px] w-56 bg-[#ef8eaa]" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {passions.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 border-[#efdce2] xl:border-r xl:pr-6 last:border-r-0">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#ffdce6] text-[#191516]">
                  <Icon size={29} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-[#231f20]">{title}</h3>
                  <p className="text-sm leading-6 text-[#5c565a]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
