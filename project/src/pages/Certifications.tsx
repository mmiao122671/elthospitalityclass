import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  Handshake,
  UtensilsCrossed,
  ShieldAlert,
  HeartPulse,
  TrendingUp,
  CheckCircle,
  Download,
} from 'lucide-react';

const certs = [
  {
    icon: BadgeCheck,
    title: 'EMERIT',
    description:
      'International tourism professional standards and certification recognized globally.',
    span: 1,
  },
  {
    icon: Handshake,
    title: 'PEI Best Service',
    description:
      'Excellence in customer service training tailored for the Prince Edward Island market.',
    span: 1,
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Safety',
    description:
      'National food sanitation training essential for all culinary and kitchen positions.',
    span: 1,
  },
  {
    icon: ShieldAlert,
    title: 'WHMIS',
    description:
      'Workplace Hazardous Materials Information System training for safety compliance.',
    span: 1,
  },
  {
    icon: HeartPulse,
    title: 'First Aid / CPR',
    description:
      'Comprehensive training in emergency response and cardiovascular resuscitation for workplace readiness.',
    span: 2,
  },
];

const pathwayPrograms = [
  'Accounting Programs',
  'Business Administration',
  'Tourism & Travel',
  'Culinary Management',
];

export default function Certifications() {
  return (
    <div className="bg-background text-on-surface">
      {/* Page Hero */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden bg-primary-container rounded-none">
        <img
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Professional kitchen training"
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="relative z-10 max-w-container mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <span className="inline-block text-white/70 font-display text-xs font-bold uppercase tracking-widest mb-4">
              Holland College
            </span>
            <h1 className="font-display text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight mb-4">
              Credentials for Your Canadian Career
            </h1>
            <p className="text-lg text-white/85">
              Gain industry-recognized certifications and build a direct path
              to advanced diplomas at Holland College.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-8 w-1.5 bg-primary rounded-full" />
            <h2 className="font-display text-[28px] font-semibold text-on-surface">
              Professional Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className={`bg-white border border-outline-variant p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex ${
                    cert.span === 2
                      ? 'md:col-span-2 flex-row items-center gap-8'
                      : 'flex-col items-center text-center'
                  } group`}
                >
                  <div
                    className={`${
                      cert.span === 2 ? 'w-20 h-20 flex-shrink-0' : 'w-16 h-16 mb-6'
                    } rounded-full bg-surface-container flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-[18px] font-bold mb-2 uppercase tracking-tight text-on-surface">
                      {cert.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Holland College Advantage */}
      <section className="py-20 bg-tertiary-fixed">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-container p-3 rounded-xl">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-display text-[28px] font-semibold text-on-surface">
                  Holland College Advantage
                </h2>
              </div>
              <p className="text-lg text-tertiary leading-relaxed mb-8">
                The ELT Hospitality program isn't just about the first job;
                it's the foundation for your academic career in Canada.
              </p>

              {/* Transfer credit highlight */}
              <div className="bg-white p-8 rounded-2xl border-l-8 border-primary shadow-sm mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-display font-bold text-primary uppercase tracking-widest mb-2 block">
                      Transfer Credit Pathway
                    </span>
                    <h4 className="font-display text-xl font-semibold mb-2 text-on-surface">
                      PROF 1005 — Workplace Essentials
                    </h4>
                    <p className="text-base text-on-surface-variant leading-relaxed">
                      Successful completion of ELT Hospitality provides full
                      transfer credit for PROF 1005, a required course for
                      Business and Accounting diplomas.
                    </p>
                  </div>
                  <div className="flex-shrink-0 bg-surface-container px-6 py-5 rounded-xl text-center min-w-[120px]">
                    <span className="block font-bold text-2xl text-primary">Save $450+</span>
                    <span className="text-xs text-on-surface-variant uppercase font-semibold tracking-wide">
                      Tuition Value
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {pathwayPrograms.map((prog) => (
                  <div
                    key={prog}
                    className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full"
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-display font-semibold text-on-surface">
                      {prog}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <img
                  src="image/Holland College Advantage.jpg"
                  alt="Students collaborating on campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center bg-white border border-outline-variant rounded-2xl p-12 shadow-sm">
            <h2 className="font-display text-[28px] font-semibold text-on-surface mb-4">
              Ready to start your path?
            </h2>
            <p className="text-base text-on-surface-variant mb-8 max-w-xl mx-auto">
              Registration is open for the upcoming intake. Contact our
              admissions team to verify your CLB level eligibility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/files/program.pdf"
                download="ELT-Hospitality-Program.pdf"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wide hover:bg-primary-container active:scale-95 transition-all h-14"
              >
                <Download className="w-4 h-4" />
                Download Program PDF
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-zinc-800 text-white px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wide hover:bg-zinc-900 active:scale-95 transition-all h-14"
              >
                Speak with an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
