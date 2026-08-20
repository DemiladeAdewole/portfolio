import { Mail, Linkedin, Download, ArrowDown } from 'lucide-react';
import { socialLinks } from '../../config/socialLinks';

const About = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="bg-[#fffdfd] text-[#191617]">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#d85f82]">
            Software Engineer · Northern Virginia
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Demilade.
            <span className="block text-[#d85f82]">I like making complicated systems work better.</span>
          </h1>

          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-[#5f595c]">
            <p>
              I&apos;m a software engineer focused on application modernization, automation, and the kind of behind-the-scenes engineering that makes everyday work smoother.
            </p>
            <p>
              What I enjoy most is understanding how something works, finding what slows people down, and building a cleaner way forward. I&apos;m especially interested in modernizing legacy applications, automating repetitive processes, and continuing to grow as an engineer.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToExperience}
              className="inline-flex items-center gap-2 rounded-md bg-[#1d1a1b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#332e30]"
            >
              See my experience <ArrowDown size={17} />
            </button>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-[#d9ced1] px-5 py-3 text-sm font-semibold text-[#2c282a] transition hover:border-[#d85f82] hover:text-[#d85f82]"
            >
              <Mail size={17} /> Contact me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#6a6265] transition hover:text-[#d85f82]"
            >
              <Download size={17} /> Resume
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#eee4e7] pt-6 text-sm text-[#6b6467]">
            <a href={`mailto:${socialLinks.email}`} className="inline-flex items-center gap-2 transition hover:text-[#d85f82]">
              <Mail size={17} /> {socialLinks.email}
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#d85f82]">
              <Linkedin size={17} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-y border-[#f0e4e7] bg-[#fbf5f6]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 lg:px-10">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#b85f78]">I care about</p>
            <p className="text-base leading-7 text-[#3d3739]">Building software that is useful, maintainable, and easier for people to work with.</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#b85f78]">I&apos;m drawn to</p>
            <p className="text-base leading-7 text-[#3d3739]">Legacy modernization, automation, full-stack development, and practical problem solving.</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#b85f78]">I&apos;m always</p>
            <p className="text-base leading-7 text-[#3d3739]">Learning something new, asking better questions, and looking for a cleaner solution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
