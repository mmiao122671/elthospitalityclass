import { Link } from 'react-router-dom';
import {
  Languages,
  CreditCard,
  Calendar,
  ChefHat,
  Hotel,
  Award,
  PlayCircle,
  ArrowRight,
} from 'lucide-react';

const showcaseItems = [
  {
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Class of 2024 - Success Story',
    subtitle: 'Transition to Front Desk Management',
  },
  {
    image: 'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Class of 2023 - Career Journey',
    subtitle: 'From Student to Sous Chef',
  },
  {
    image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Class of 2024 - Success Story',
    subtitle: 'Hospitality English Excellence',
  },
  {
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Class of 2022 - Success Story',
    subtitle: 'Tourism Professional Pathway',
  },
  {
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Class of 2024 - Success Story',
    subtitle: 'Global Skills, Local Opportunity',
  },
  {
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Class of 2023 - Success Story',
    subtitle: 'Building Community in PEI',
  },
];

export default function Home() {
  return (
    <div className="bg-background text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Hotel reception with friendly staff"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/10" />
        </div>
        <div className="max-w-container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-2xl">
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
                    <p className="text-sm text-on-surface-variant">English Proficiency</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/40">
                  <div className="bg-primary-fixed w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-on-primary-fixed-variant text-base">Permanent Resident</p>
                    <p className="text-sm text-on-surface-variant">Or Protected Person Status</p>
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
              <h4 className="font-display font-bold text-lg mb-2 text-on-surface">Culinary Excellence</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Master back-of-house operations in professional commercial kitchens.
              </p>
            </div>
            <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center mb-4">
                <Hotel className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display font-bold text-lg mb-2 text-on-surface">Hotel Management</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Front desk operations, guest services, and tourism fundamentals.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseItems.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md bg-zinc-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                    <div className="w-14 h-14 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="w-7 h-7 fill-white" />
                    </div>
                  </div>
                </div>
                <p className="font-display font-bold text-on-surface mb-1">{item.title}</p>
                <p className="text-sm text-on-surface-variant">{item.subtitle}</p>
              </div>
            ))}
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
