import { useState } from 'react';
import { MapPin, Phone, Mail, AlertTriangle, CheckCircle } from 'lucide-react';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  clbLevel: string;
  preferredDate: string;
  message: string;
};

const initialForm: FormData = {
  fullName: '',
  email: '',
  phone: '',
  clbLevel: 'CLB 5',
  preferredDate: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="bg-background text-on-surface">
      {/* Page header */}
      <section className="pt-16 pb-10">
        <div className="max-w-container mx-auto px-6">
          <span className="inline-block bg-primary-container text-white font-display text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Admissions
          </span>
          <h1 className="font-display text-[clamp(28px,4vw,44px)] font-bold text-primary mb-3">
            Connect With Us
          </h1>
          <p className="text-lg text-tertiary max-w-2xl">
            Begin your journey in the Canadian hospitality sector. Our
            coordinators are here to support your registration and career
            goals.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-20">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: coordinator + form */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Coordinator card */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src="/image/Beverley.jpg"
                  alt="Beverley Fullerton Lewis, Program Coordinator"
                  className="w-28 h-28 rounded-full object-cover border-4 border-surface-container-low flex-shrink-0"
                />
                <div>
                  <h2 className="font-display text-[22px] font-semibold text-on-surface mb-0.5">
                    Program Coordinator
                  </h2>
                  <p className="font-display font-bold text-primary text-base mb-3">
                    Beverley Fullerton Lewis
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    Dedicated to helping newcomers bridge the gap between
                    international experience and Canadian hospitality standards.
                    Room 217, Holland College Belmont Centre.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:b.fullertonlewis@hollandcollege.com"
                      className="flex items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      <span>b.fullertonlewis@hollandcollege.com</span>
                    </a>
                    <a
                      href="tel:+19026287014"
                      className="flex items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>(902) 628-7014</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Commitment warning */}
              <div className="p-5 border-l-4 border-error bg-error-container/20 rounded-r-xl">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-error text-sm uppercase tracking-widest mb-1">
                      Mandatory Full Commitment
                    </p>
                    <p className="text-on-error-container text-sm leading-relaxed">
                      This program requires a full-time commitment from
                      September through June. Missing modules can impact
                      certification and graduation status.
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking form */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-8">
                <h3 className="font-display text-[22px] font-semibold text-on-surface mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </span>
                  Book Your Intake Interview
                </h3>

                {submitted ? (
                  <div className="flex flex-col items-center py-12 gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-display font-bold text-xl text-on-surface">
                      Request Submitted!
                    </h4>
                    <p className="text-on-surface-variant max-w-sm">
                      Thank you for your interest. Our team will contact you
                      within 2 business days to schedule your interview.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-primary font-display font-semibold text-sm underline hover:no-underline"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block font-display text-xs font-bold uppercase tracking-widest text-on-surface">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block font-display text-xs font-bold uppercase tracking-widest text-on-surface">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block font-display text-xs font-bold uppercase tracking-widest text-on-surface">
                          English Level (CLB) *
                        </label>
                        <select
                          required
                          name="clbLevel"
                          value={form.clbLevel}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        >
                          <option>CLB 5</option>
                          <option>CLB 6</option>
                          <option>CLB 7</option>
                          <option>CLB 8+</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="block font-display text-xs font-bold uppercase tracking-widest text-on-surface">
                          Preferred Interview Date
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={form.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-display text-xs font-bold uppercase tracking-widest text-on-surface">
                        Message / Questions
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your background in hospitality..."
                        className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-4 rounded-xl font-display font-bold text-sm uppercase tracking-widest hover:bg-primary-container active:scale-[0.98] transition-all shadow-sm"
                    >
                      Request Interview Time
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: location + support */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Live Google map */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden h-[360px] relative">
                <iframe
                  title="Holland College Belmont Centre Map"
                  src="https://www.google.com/maps?q=34+Belmont+Street,+Charlottetown,+PE+C1A+5H1&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-outline-variant">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-display font-bold text-on-surface text-sm">
                        Holland College Belmont Centre
                      </p>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Room 217, 34 Belmont Street, Charlottetown, PE C1A 5H1
                      </p>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=34+Belmont+Street,+Charlottetown,+PE+C1A+5H1"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-2 text-xs font-semibold text-primary hover:underline"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* IRCC Support card */}
              {/* <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10">
                  <AlertTriangle className="w-32 h-32 m-4" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-display text-[22px] font-semibold mb-2">
                    Need help with IRCC?
                  </h4>
                  <p className="text-sm text-white/85 leading-relaxed mb-6">
                    Our team can guide you through the funded seat eligibility
                    requirements and necessary documentation for permanent
                    residents.
                  </p>
                  <div className="flex flex-col gap-3">
                    {['Check Eligibility', 'Document Checklist'].map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-colors group"
                      >
                        <span className="font-display font-semibold text-sm">{label}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Quick contact info */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 space-y-4">
                <h4 className="font-display font-bold text-on-surface uppercase tracking-wider text-sm">
                  Contact Details
                </h4>
                <div className="flex items-start gap-3 text-sm text-on-surface">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-on-surface-variant">
                    34 Belmont Street, Room 217<br />
                    Charlottetown, PE C1A 5H1
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:+19026287014" className="text-on-surface-variant hover:text-primary transition-colors">
                    (902) 628-7014
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:b.fullertonlewis@hollandcollege.com" className="text-on-surface-variant hover:text-primary transition-colors break-all">
                    b.fullertonlewis@hollandcollege.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
