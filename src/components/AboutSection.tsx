import { ABOUT_IMAGE, ABOUT_METRICS } from '../data/hotelData';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section id="about" className="bg-black py-16 sm:py-24 border-b border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-6">
            <div className="h-full min-h-[280px] sm:min-h-[360px] rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <ResilientImage
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                fallbackTitle="Amstel Grand Atrium Lounge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-medium text-blue-400 tracking-wide">
              About Amstel Grand · Established 1998
            </p>
            <h2 className="mt-2 font-display font-bold tracking-tight text-white text-2xl sm:text-3xl lg:text-4xl [text-wrap:balance]">
              Regulated Dutch Hospitality Built Around Calm Architecture
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed tracking-[0.01em]">
              Founded in Amsterdam in 1998, Amstel Grand brings together architectural boutique hotels and licensed European casinos across four historic Dutch cities. Instead of crowded neon halls, our properties pair bright limestone atriums, canal-facing suites, and understated blue-baize gaming salons.
            </p>
            <p className="mt-4 text-base text-slate-300 leading-relaxed tracking-[0.01em]">
              All gaming floors operate under strict Dutch Kansspelautoriteit (KSA) oversight and Cruks responsible-play standards, ensuring transparent table rules, verified guest privacy, and 24-hour multilingual hospitality.
            </p>

            <dl className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-3 gap-4 sm:gap-8">
              {ABOUT_METRICS.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs sm:text-sm text-slate-400 leading-snug">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
