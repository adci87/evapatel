import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/hotelData';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  selectedService: string;
  onSelectService: (serviceValue: string) => void;
}

export function ServicesSection({
  selectedService,
  onSelectService,
}: ServicesSectionProps) {
  return (
    <section id="services" className="bg-black py-16 sm:py-24 border-b border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-400 tracking-wide">Hospitality & Gaming</p>
          <h2 className="mt-2 font-display font-bold tracking-tight text-white text-2xl sm:text-3xl lg:text-4xl [text-wrap:balance]">
            Three Pillars of a Refined Dutch Casino Stay
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed tracking-[0.01em]">
            Every Amstel Grand property integrates quiet architectural accommodation, licensed European gaming salons, and regional fine dining under one roof.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const isSelected = selectedService === service.inquiryValue;
            return (
              <article
                key={service.id}
                className={`bg-[#0A0F1A] rounded-xl border transition-colors duration-150 overflow-hidden flex flex-col ${
                  isSelected ? 'border-blue-500' : 'border-slate-800 hover:border-blue-500/60'
                }`}
              >
                <div className="aspect-[4/3] w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackTitle={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-400 tabular-nums">
                    <span>{service.number}</span>
                    <span aria-hidden="true" className="text-slate-600">
                      ·
                    </span>
                    <span>{service.category}</span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-5 pt-2 border-t border-slate-800 divide-y divide-slate-800/80 text-sm text-slate-300">
                    {service.highlights.map((item) => (
                      <li key={item} className="py-2.5 leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.inquiryValue)}
                      className="w-full inline-flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-blue-300 bg-blue-950/60 hover:bg-blue-600 hover:text-white border border-blue-800/80 hover:border-blue-600 rounded-lg transition-colors duration-150 min-h-[44px] cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
                    >
                      <span className="whitespace-nowrap shrink-0">
                        {service.actionLabel}
                      </span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
