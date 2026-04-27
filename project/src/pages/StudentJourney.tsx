import { Link } from 'react-router-dom';
import {
  BookOpen,
  Sparkles,
  Briefcase,
  Trophy,
  CheckCircle,
  AlertTriangle,
  Quote,
} from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Fall Semester',
    dates: 'September – November',
    description:
      'Focus on Language & Essentials. Build your foundation in hospitality terminology and Canadian workplace culture.',
    items: ['Workplace English', 'Hospitality Basics', 'Canadian Culture Orientation'],
    icon: BookOpen,
    highlight: false,
  },
  {
    phase: 'Phase 2',
    title: 'Winter Semester',
    dates: 'December – February',
    description:
      'Events & Shop. Hands-on training in event management and retail operations at college facilities.',
    items: ['Event Planning', 'Customer Service', 'Winter Carnival Project'],
    icon: Sparkles,
    highlight: false,
  },
  {
    phase: 'Phase 3',
    title: 'Spring Semester',
    dates: 'March – May',
    description:
      'Job Shadow & Final Certs. Transition into industry placements to observe professionals in action.',
    items: ['Industry Placements', 'Food Safety Certification', 'First Aid / CPR Training'],
    icon: Briefcase,
    highlight: false,
  },
  {
    phase: 'Phase 4',
    title: 'Graduation',
    dates: 'June',
    description:
      'Celebration of completion and launch into your professional hospitality career in PEI.',
    items: ['Convocation Ceremony', 'Job Ready Portfolio', 'Industry Connections'],
    icon: Trophy,
    highlight: true,
  },
];

const stories = [
  {
    quote:
      '"The ELT program didn\'t just teach me English; it gave me the confidence to lead a team. I went from a newcomer to a Front Desk Manager at a leading PEI resort in just one year."',
    name: 'Elena Rodriguez',
    role: 'Front Desk Manager & ELT Graduate',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    quote:
      '"Holland College provides a supportive environment that truly values diversity. The program\'s integration with local industry partners was key to my career success in PEI."',
    name: 'Ahmed Khalil',
    role: 'Culinary Arts Graduate',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export default function StudentJourney() {
  return (
    <div className="bg-background text-on-surface">
      {/* Page Hero */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-primary-container text-white font-display text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Admissions 2026–2027
              </span>
              <h1 className="font-display text-[clamp(28px,4vw,44px)] font-bold text-on-background leading-tight">
                Your Path to a Career in Hospitality Starts Here
              </h1>
              <p className="text-lg text-tertiary leading-relaxed">
                The English Language Training (ELT) Hospitality program at
                Holland College is a comprehensive vocational journey designed
                for newcomers to Canada.
              </p>

              {/* Commitment warning */}
              <div className="p-5 border-l-4 border-error bg-error-container/25 rounded-r-xl">
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
            </div>

            <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Culinary students in professional kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-medium italic text-base">
                  "Real-world training in professional environments."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Roadmap */}
      <section className="py-16 bg-surface">
        <div className="max-w-container mx-auto px-6">
          <h2 className="font-display text-[28px] font-semibold text-on-background mb-10">
            Program Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.phase}
                  className={`relative p-8 rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow ${
                    p.highlight
                      ? 'bg-primary-container text-white border-2 border-primary shadow-lg'
                      : 'bg-white border border-zinc-200'
                  }`}
                >
                  {/* Decorative bg icon */}
                  <div className={`absolute top-0 right-0 p-4 ${p.highlight ? 'opacity-20' : 'opacity-8'}`}>
                    <Icon className={`w-16 h-16 ${p.highlight ? 'text-white' : 'text-primary'}`} />
                  </div>

                  <div className={`mb-3 text-xs font-display font-bold uppercase tracking-widest ${p.highlight ? 'text-white/70' : 'text-primary'}`}>
                    {p.phase}
                  </div>
                  <h3 className={`font-display text-xl font-semibold mb-3 ${p.highlight ? 'text-white' : 'text-on-surface'}`}>
                    {p.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 flex-grow ${p.highlight ? 'text-white/80' : 'text-tertiary'}`}>
                    {p.description}
                  </p>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${p.highlight ? 'text-white/70' : 'text-green-600'}`} />
                        <span className={`text-sm font-medium ${p.highlight ? 'text-white' : 'text-on-surface'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-6 pt-4 border-t ${p.highlight ? 'border-white/20 text-white/60' : 'border-zinc-100 text-zinc-400'} text-xs font-display font-bold uppercase tracking-widest`}>
                    {p.dates}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <h2 className="font-display text-[28px] font-semibold text-on-background mb-10">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story) => (
              <div
                key={story.name}
                className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col md:flex-row gap-6 items-start"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-surface-container-low flex-shrink-0"
                />
                <div>
                  <Quote className="w-8 h-8 text-primary-fixed mb-3" />
                  <p className="text-tertiary italic text-base leading-relaxed mb-4">
                    {story.quote}
                  </p>
                  <p className="font-display font-bold text-on-surface">
                    {story.name}
                  </p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                    {story.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-[28px] font-semibold mb-4">
            Join Our Next Cohort
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            Seats are limited. Book your intake interview today and start your
            journey toward a career in Canada's hospitality industry.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wide hover:bg-primary-container active:scale-95 transition-all shadow-lg"
          >
            Book Your Interview
          </Link>
        </div>
      </section>
    </div>
  );
}
