const links = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'impact', label: 'Impact' },
  { id: 'projects', label: 'Projects' },
  { id: 'tech', label: 'Tech' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full border border-zinc-400/40 flex items-center justify-center text-xs font-bold text-white/80">
            ANC
          </div>
          <span className="hidden sm:block text-sm font-semibold tracking-wide">
          </span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm text-white/80">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="
                relative
                text-white/80
                hover:text-white
                transition-colors
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[1px]
                after:w-0
                after:bg-zinc-400
                after:transition-all
                hover:after:w-full
              "
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
