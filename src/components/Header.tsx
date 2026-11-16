import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ onBookClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleMobileBookClick = () => {
    setMobileMenuOpen(false);
    onBookClick();
  };

  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-4 rounded-sm"
        >
          Amstel Grand
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition-colors duration-150 underline-offset-4 hover:underline whitespace-nowrap shrink-0 py-2 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile drawer trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onBookClick}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[40px] cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
          >
            Book a Stay
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-slate-900 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-black px-4 py-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileLinkClick}
                className="px-3 py-3 min-h-[44px] flex items-center text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-slate-900 rounded-lg transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleMobileBookClick}
              className="mt-2 w-full min-h-[44px] px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-150 cursor-pointer"
            >
              Book a Stay
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
