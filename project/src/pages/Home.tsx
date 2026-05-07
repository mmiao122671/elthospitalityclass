import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Languages,
  CreditCard,
  Calendar,
  ChefHat,
  Hotel,
  Award,
  ArrowRight,
} from 'lucide-react';

const heroBackgroundSlides = [
  '/image/1.jpg',
  '/image/2.jpg',
  '/image/3.jpg',
  '/image/4.jpg',
  '/image/5.jpg',
] as const;

const SLIDE_INTERVAL_MS = 6000;

const showcaseItems = [
  {
    title: 'ELT Hospitality Class 2025-2026',
    videoUrl: 'https://www.youtube.com/embed/lry1icD6YWo',
  },
  {
    title: 'ELT Hospitality Class 2024-2025',
    videoUrl: 'https://www.youtube.com/embed/z2ElA5Ycsvk',
  },
  {
    title: 'ELT Hospitality Class 2023-2024',
    videoUrl: 'https://www.youtube.com/embed/WWOB4zQ_tcE',
  },
  {
    title: 'ELT Hospitality Class 2022-2023',
    videoUrl: 'https://www.youtube.com/embed/4bV1N2JAVbM',
  },
  {
    title: 'ELT Hospitality Class 2021-2022',
    videoUrl: 'https://www.youtube.com/embed/IcXw_If0MvU',
  },
  {
    title: 'ELT Hospitality Class 2020-2021',
    videoUrl: 'https://www.youtube.com/embed/GsuaEmLeOPA',
  },
];

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [expandedShowcaseIndex, setExpandedShowcaseIndex] = useState<
    number | null
  >(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setHeroSlide((i) => (i + 1) % heroBackgroundSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const toggleShowcase = (index: number) => {
    setExpandedShowcaseIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (expandedShowcaseIndex === null) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedShowcaseIndex(null);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [expandedShowcaseIndex]);

  useEffect(() => {
    if (expandedShowcaseIndex === null) return;
    const el = document.getElementById(
      `showcase-card-${expandedShowcaseIndex}`,
    );
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [expandedShowcaseIndex]);

  return (
    <div className="bg-background text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden>
          {heroBackgroundSlides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                i === heroSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/15" />
        </div>
        <div className="relative z-10 mx-auto max-w-container px-6 py-20">
          <div className="max-w-2xl [text-shadow:0_1px_2px_rgba(255,255,255,0.85)]">
            <span className="inline-block bg-primary-container text-white font-display text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Holland College — IRCC Funded
            </span>
            <h1 className="font-display text-[clamp(32px,5vw,52px)] font-bold leading-[1.15] tracking-tight text-primary mb-6">
              Launch Your Hospitality Career in Prince Edward Island
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-lg">
              Bridge the gap between your international background and the
              Canadian hospitality industry. Gain hands-on training, industry
              certifications, and English language excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-display font-bold text-base uppercase tracking-wide shadow-lg hover:bg-primary-container active:scale-95 transition-all duration-150"
              >
                Book Your Interview
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/program"
                className="inline-flex items-center justify-center border-2 border-tertiary text-tertiary px-8 py-4 rounded-xl font-display font-bold text-base uppercase tracking-wide hover:bg-tertiary hover:text-white transition-all duration-150"
              >
                View Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary Bento */}
      <section className="py-20 bg-surface">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Eligibility */}
            <div className="md:col-span-8 bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between gap-6">
              <div>
                <h2 className="font-display text-[28px] font-semibold text-primary mb-2">
                  Program Eligibility
                </h2>
                <p className="text-on-surface-variant text-base">
                  This IRCC-funded program is specifically designed for
                  newcomers to Canada.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/40">
                  <div className="bg-primary-fixed w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    <Languages className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-on-primary-fixed-variant text-base">CLB 5–8</p>
                   
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/40">
                  <div className="bg-primary-fixed w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-on-primary-fixed-variant text-base">Permanent Resident</p>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="md:col-span-4 bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <Calendar className="w-10 h-10 mb-4 opacity-90" />
                <h3 className="font-display text-[24px] font-semibold mb-2">2026–27 Cohort</h3>
                <div className="space-y-4 mt-6">
                  <div className="border-l-2 border-white/40 pl-4">
                    <p className="text-xs opacity-70 uppercase tracking-widest font-display font-bold mb-1">Starts</p>
                    <p className="font-bold text-xl">September 2026</p>
                  </div>
                  <div className="border-l-2 border-white/40 pl-4">
                    <p className="text-xs opacity-70 uppercase tracking-widest font-display font-bold mb-1">Graduation</p>
                    <p className="font-bold text-xl">June 2027</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Calendar className="w-36 h-36" />
              </div>
            </div>

            {/* Feature cards */}
            <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center mb-4">
                <ChefHat className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display font-bold text-lg mb-2 text-on-surface">Culinary Essentials</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
              Practice food preparation and kitchen safety through the School Lunch Program partnership.
              </p>
            </div>
            <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center mb-4">
                <Hotel className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display font-bold text-lg mb-2 text-on-surface">Tourism & Guest Services</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
              Build professional skills in front desk operations, local tourism knowledge, and guest relations.
              </p>
            </div>
            <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display font-bold text-lg mb-2 text-on-surface">Certifications</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Earn Food Safety, Smart Serve, and First Aid industry credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-[28px] font-semibold text-primary mb-4">
              Student Showcase
            </h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Hear directly from our graduates about how the ELT Hospitality
              program transformed their careers in Canada.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {showcaseItems
              .map((item, i) => ({ item, i }))
              .sort((a, b) => {
                if (expandedShowcaseIndex === a.i) return -1;
                if (expandedShowcaseIndex === b.i) return 1;
                return a.i - b.i;
              })
              .map(({ item, i }) => {
                const expanded = expandedShowcaseIndex === i;
                const othersExpanded =
                  expandedShowcaseIndex !== null && !expanded;
                return (
                  <div
                    key={i}
                    id={`showcase-card-${i}`}
                    className={`rounded-xl border border-zinc-200 p-3 shadow-sm transition-all duration-300 ease-out ${
                      expanded
                        ? 'col-span-full order-first z-[1] ring-2 ring-primary shadow-xl sm:p-5'
                        : ''
                    } ${othersExpanded ? 'opacity-75' : ''}`}
                  >
                    <div
                      id={`showcase-video-${i}`}
                      className={`relative w-full overflow-hidden rounded-lg bg-zinc-200 aspect-video transition-[box-shadow] duration-300 ${
                        expanded ? 'shadow-lg ring-1 ring-black/10' : ''
                      }`}
                    >
                      <iframe
                        src={item.videoUrl}
                        title={item.title}
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleShowcase(i)}
                      className="mt-3 w-full text-left font-display font-bold text-on-surface transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                      aria-expanded={expanded}
                      aria-controls={`showcase-video-${i}`}
                    >
                      {item.title}
                      <span className="mt-0.5 block text-xs font-normal text-on-surface-variant">
                        {expanded
                          ? 'Click again to shrink, or press Esc'
                          : 'Click title for full-width video'}
                      </span>
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface border-y border-zinc-200">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-[28px] font-semibold text-on-surface mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Interviews are now being scheduled for the 2026 intake. Meet with
            our instructors and find out if ELT Hospitality is the right fit
            for you.
          </p>
          <div className="flex justify-center items-center gap-6">
            <div className="hidden sm:block h-px w-16 bg-outline-variant" />
            <Link
              to="/contact"
              className="bg-primary text-white font-display font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-xl hover:bg-primary-container active:scale-95 transition-all duration-150 uppercase tracking-wide"
            >
              Book Your Interview
            </Link>
            <div className="hidden sm:block h-px w-16 bg-outline-variant" />
          </div>
        </div>
      </section>
    </div>
  );
}
