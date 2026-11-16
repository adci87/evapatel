import { ArrowRight, Check } from 'lucide-react';
import { DESTINATIONS, HERO_IMAGE } from '../data/hotelData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  onReserveClick: () => void;
}

export function HeroSection({
  selectedCity,
  onSelectCity,
  onReserveClick,
}: HeroSectionProps) {
  return (
    <section id="top" className="bg-black pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-sm font-medium text-blue-400 tracking-wide mb-4">
              Amsterdam · Scheveningen · Rotterdam · Maastricht
            </p>
            <h1 className="font-display font-bold tracking-tight text-white text-[clamp(2.25rem,3.6vw,3.4rem)] leading-[1.08] [text-wrap:balance]">
              Dutch Waterfront Hotels and Private Casino Salons
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl tracking-[0.01em]">
              Experience five-star canal and North Sea suites paired with licensed European table games, coastal dining, and dedicated 24-hour concierge care across the Netherlands.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onReserveClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
              >
                Reserve Your Stay
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-4 py-3 text-sm sm:text-base font-medium text-slate-200 hover:text-blue-400 transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2 rounded-lg"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[420px] rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <ResilientImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fallbackTitle="Amstel Grand — Amsterdam Canal Flagship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Full-width 4-column Dutch destination selector strip */}
        <div id="destinations" className="mt-10 sm:mt-14 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4">
            <h2 className="font-display text-sm font-semibold text-white tracking-wide">
              Select a Dutch Casino Hotel Destination
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Click a city to pre-fill your stay inquiry below
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-800 rounded-xl overflow-hidden bg-neutral-950 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {DESTINATIONS.map((dest) => {
              const isSelected = selectedCity === dest.city;
              return (
                <button
                  key={dest.id}
                  type="button"
                  onClick={() => onSelectCity(dest.city)}
                  aria-pressed={isSelected}
                  className={`text-left p-5 transition-colors duration-150 cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-blue-500 ${
                    isSelected
                      ? 'bg-[#0B1F3A] text-white'
                      : 'bg-neutral-950 hover:bg-slate-900/70 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-base font-semibold text-white">
                      {dest.city}
                    </span>
                    {isSelected && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-300 whitespace-nowrap shrink-0">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        Selected
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{dest.district}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-medium text-blue-400 tabular-nums">
                    <span>{dest.suites}</span>
                    <span aria-hidden="true" className="text-slate-600">
                      ·
                    </span>
                    <span>{dest.tables}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {dest.highlight}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
