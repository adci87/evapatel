export function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <a
            href="#top"
            className="font-display text-base font-bold tracking-tight text-white"
          >
            Amstel Grand
          </a>
          <p className="mt-1 text-xs text-slate-400">
            18+ · Licensed Dutch Casino Hospitality · Play Responsibly
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-6 text-sm text-slate-300"
        >
          <a href="#destinations" className="hover:text-blue-400 transition-colors">
            Destinations
          </a>
          <a href="#services" className="hover:text-blue-400 transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>

        <p className="text-xs text-slate-400 tabular-nums">
          © 2026 Amstel Grand Hotels B.V.
        </p>
      </div>
    </footer>
  );
}
