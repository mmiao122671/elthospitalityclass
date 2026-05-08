import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Handshake,
  CheckCircle,
  ShoppingBag,
  ChefHat,
  PartyPopper,
  MapPin,
} from 'lucide-react';

const modules = [
  {
    icon: ShoppingBag,
    title: 'Customer Service',
    image: '/image/Customer Service.jpg',
    description:
      'Develop essential interpersonal skills and learn the fundamentals of Canadian workplace culture through hands-on practice at the New-to-You Shop.',
    // link: 'Explore Retail Module',
  },
  {
    icon: ChefHat,
    title: 'Culinary Arts',
    image: '/image/Culinary Arts.jpg',
    description:
      'Practice cooking and serving through our School Lunch Program. Gain hands-on experience in a collaborative environment while supporting the local community.',
    
  },
  {
    icon: PartyPopper,
    title: 'Event Planning',
    image: '/image/Event Planning.jpg',
    description:
      'Discover the excitement of hosting large-scale events. From planning the Winter Carnival to managing the Haunted House, gain experience in creating memorable guest experiences',
    
  },
  {
    icon: MapPin,
    title: 'Tourism Knowledge',
    image: '/image/Tourism Knowledge.jpg',
    description:
      'Gain a professional understanding of the local tourism industry through educational bus tours and regional orientations. Build knowledge of local tourism through first-hand experiences.',
    // link: 'Explore Tourism Module',
  },
];

export default function ProgramOverview() {
  return (
    <div className="bg-background text-on-surface">
      <Helmet>
        <title>Hospitality Curriculum | ELT & Hospitality Class</title>
        <meta
          name="description"
          content="Explore the ELT and Hospitality curriculum in Charlottetown, including customer service, culinary arts, event planning, and tourism training."
        />
        <meta
          name="keywords"
          content="Hospitality Curriculum, ELT Training, Culinary Arts, Event Planning, Charlottetown"
        />
      </Helmet>
      {/* Page Hero */}
      <section className="relative min-h-[380px] flex items-center overflow-hidden bg-primary-container">
        <img
          src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Hospitality students in training"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
        />
        <div className="relative z-10 max-w-container mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <span className="inline-block text-white/70 font-display text-xs font-bold uppercase tracking-widest mb-4">
              Holland College
            </span>
            <h1 className="font-display text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight mb-4">
              Program Overview &amp; Objectives
            </h1>
            <p className="text-lg text-white/85">
              Building your career in Canada's hospitality sector through
              hands-on learning and real-world practice.
            </p>
          </div>
        </div>
      </section>

      {/* The Experience + Module Grid */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <h2 className="font-display text-[28px] font-semibold text-on-surface mb-6">
            Our Hospitality Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Experience card */}
            <div className="md:col-span-4 bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center mb-6">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-[24px] font-semibold text-on-surface mb-4">
                  The Experience
                </h2>
                <p className="text-base text-tertiary leading-relaxed">
                  Our program is defined by its hands-on nature. We believe
                  learning by doing is the fastest way to gain confidence in
                  your new professional environment.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {['Practical Training', 'Workplace Readiness', 'Industry Certifications', 'Job Placement Support'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-display text-sm font-semibold uppercase tracking-wide text-on-surface">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Module cards */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {modules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={mod.title}
                    className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                  >
                    <div className="h-44 overflow-hidden">
                      <img
                        src={mod.image}
                        alt={mod.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <h3 className="font-display font-semibold text-lg text-on-surface">
                          {mod.title}
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                        {mod.description}
                      </p>
                      {/* <span className="text-primary font-display text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-150">
                        {mod.link}
                        <ArrowRight className="w-4 h-4" />
                      </span> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="bg-zinc-100 rounded-2xl border border-zinc-200 p-12 text-center">
            <h2 className="font-display text-[28px] font-semibold text-on-surface mb-4">
              Ready to start your journey?
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
              Join a community of international learners and gain the skills
              needed for Prince Edward Island's growing hospitality industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wide hover:bg-primary-container transition-colors"
              >
                Apply for Next Intake
              </Link>
              <Link
                to="/certifications"
                className="border-2 border-tertiary text-tertiary px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wide hover:bg-tertiary hover:text-white transition-all"
              >
                View Certifications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
