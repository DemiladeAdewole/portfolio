import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [open, setOpen] = useState(false);

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
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-[99999] border-b border-white/5 bg-[#0e0b0d] text-white shadow-sm"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          onClick={() => window.location.href = '/'}
          className="border-0 bg-transparent p-0 font-serif text-2xl italic tracking-wide text-[#ef7c9c] md:text-3xl"
          aria-label="Demilade Adewole - Go to homepage"
        >
          Demilade Adewole ✦
        </button>

        <div className="hidden items-center gap-7 md:flex">
          <button onClick={() => goTo('about')} className="border-0 bg-transparent px-1 py-2 text-sm font-semibold text-[#f08aa6]">Home</button>
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => goTo(tab.id)} className="border-0 bg-transparent px-1 py-2 text-sm font-medium text-white/90 transition hover:text-[#f08aa6]">
              {tab.label}
            </button>
          ))}
          <a href="/contact" className="px-1 py-2 text-sm font-medium text-white/90 transition hover:text-[#f08aa6]">Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex items-center gap-2 rounded-lg border border-[#f2a0b7] px-4 py-2.5 text-sm font-semibold text-[#ffd6e1] transition hover:bg-[#ef5f85] hover:text-white"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>

        <button
          className="rounded-lg border border-white/15 bg-white/5 p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0e0b0d] px-6 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            <button onClick={() => goTo('about')} className="rounded-md bg-transparent px-3 py-3 text-left text-[#f08aa6]">Home</button>
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => goTo(tab.id)} className="rounded-md bg-transparent px-3 py-3 text-left text-white/90">
                {tab.label}
              </button>
            ))}
            <a href="/contact" className="rounded-md px-3 py-3 text-white/90">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
