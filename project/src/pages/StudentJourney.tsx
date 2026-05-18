import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { AlertTriangle, Quote } from 'lucide-react';

const stories = [
  {
    name: 'Runhua Zhou',
    classYear: 'Class of ELT 2017-2018',
    role: 'Banquet Captain',
    image: '/image/runhua.jpg',
    story:
      "Runhua Zhou went to the Rodd Charlottetown for her job shadow as a banquet server and she was hired. After doing that job for a short time, she was promoted to Banquet Captain. In April 2025, she was the Champion of the Month at the Rodd Charlottetown.\n\nHer positivity, dependability, and leadership make her truly deserving of this recognition. She has never missed a shift, always supports her team, and plays a key role in every event's success.",
    quote:
      "Her positivity, dependability, and leadership make her truly deserving of this recognition.",
  },
  {
    name: 'Fereshteh Shabestani',
    classYear: 'Class of ELT 2022-2023',
    role: 'Pastry Chef',
    image: '/image/fereshteh.jpg',
    story:
      'Fereshteh Shabestani became a pastry chef at Red Shores shortly after she left the ELT class. She appreciated the portfolio she built in the class and felt prepared when she went to the interview.\n\nNow she is the pastry chef at Dalvay-By-the-Sea Hotel where she creates delightful desserts to satisfy and impress all the guests at this historic hotel in the PEI National Park.',
    quote:
      'Now she is the pastry chef at Dalvay-By-the-Sea Hotel where she creates delightful desserts to satisfy and impress all the guests.',
  },
  {
    name: 'Jin Jia',
    classYear: 'Class of ELT 2018-2019',
    role: 'Entrepreneur',
    image: '/image/jin-jia.jpg',
    story:
      "I'll never forget my time in Beverley's ELT Hospitality Class. I often helped a classmate who struggled with challenging reading materials, doing my best to support his understanding. I did not think much of it - it was just a small act of kindness repeated over time. To my surprise, Beverley noticed and presented me with the 'Extra Mile' award. Her recognition meant a great deal to me. It planted a seed that grew into a belief I carry with me to this day: always go the extra mile.\n\nThat small moment of encouragement helped shape a much bigger dream - to build a meaningful life and career in my new country. This mindset has been essential as my husband and I built our businesses: MoJi-fast Technology Ltd., a solar energy system installation company, and Jane's Dumplings, our restaurant. The English skills, confidence, and positive attitude I gained in the ELT Hospitality Class have helped us overcome countless challenges as newcomers to Canada.\n\nStarting a business in a new country is never easy, but the foundation I built through the ELT Hospitality Class gave me the courage to turn challenges into opportunities - and dreams into reality.",
    quote: 'Always go the extra mile.',
  },
  {
    name: 'Lydia Huang',
    classYear: 'Class of ELT 2022-2023',
    role: 'Health PEI',
    image: '/image/lydia-huang.jpg',
    story:
      'The ELT class played a key role in helping me improve my English skills. It boosted my confidence in speaking and communicating with others - I am no longer afraid to express myself in English. The year I completed the ELT program, I passed the English language requirements for UPEI and successfully secured my current position at Health PEI.\n\nThe program gave me the knowledge, support, and motivation I needed to move forward in both my career and academic journey.',
    quote:
      'The ELT program gave me the confidence and support to pursue my dreams.',
  },
  {
    name: 'Carol Jiang',
    classYear: 'Class of ELT 2021-2022',
    role: 'Insurance Broker',
    image: '/image/carol-jiang.jpg',
    story:
      "I was a student of 2022 ELT program. The ELT program greatly contributed to my ability to secure employment by enhancing my English and professional skills. After graduation, I have been working for HL Sear Insurance as an insurance broker. I could not have done it without the help from the intensive class and those dedicated instructors.\n\nBy taking the one-year program, I gained relevant skills, boosted my resume, increased confidence, and expanded my network. Participating in this training was an honor. The skills and knowledge I gained directly contributed to my life. I am truly grateful for that.",
    quote:
      'The ELT program gave me the skills and confidence to succeed in my new career.',
  },
  {
    name: 'Judy',
    classYear: 'Class of ELT 2023-2024',
    role: 'IRSA Immigration Program Specialist',
    image: '/image/judy.jpg',
    story:
      'I am truly grateful for the opportunity to take the ELT course. I loved the atmosphere in the classroom - we learned, shared, respected one another, and laughed together. Over the ten months, I gained valuable skills and earned several practical certificates. We also had local guest speakers who shared insightful and interesting information with us. It was such a wonderful way to meet amazing people and explore PEI more.\n\nThe year I spent with the ELT class has been the most enjoyable since I came to Canada. We went on outings, visited various places, and heard inspiring stories that connected us to the island history and people.',
    quote:
      'Thank you, Beverley, for being such a dedicated and passionate teacher.',
  },
  {
    name: 'Hossein Deban',
    classYear: 'Class of ELT 2023-2024',
    role: 'Hair Stylist',
    image: '/image/hossein.jpg',
    story:
      "I've always had a passion for hair styling and beauty, and my professional journey started with small but confident steps. Over time, I realized that success in this field is not just about technical skills - it is also about delivering an exceptional customer experience and being able to communicate effectively.\n\nTaking the Hospitality class at school was a turning point in my career. It not only helped me improve my English significantly, but also equipped me with valuable certifications that enhanced the quality of service I provide. Through this course, I earned certificates in First Aid, Customer Service, and Health and Safety - all essential skills for working professionally and responsibly with clients.\n\nOne of the most impactful moments was when my teacher, Ms. Beverley, arranged an interview for me with The Guardian newspaper in Charlottetown. That opportunity gave me the exposure and confidence I needed, and eventually helped me secure a job in my field.\n\nToday, I work as a hair stylist at Elastic Hair Design and take pride in my ability to connect with clients, provide high-quality service, and ensure their comfort and safety. The Hospitality class was more than just a subject - it was a key step in building my successful career.",
    quote:
      'The Hospitality class was more than just a subject - it was a key step in building my successful career.',
  },
  {
    name: 'Nuray',
    classYear: 'Class of ELT 2021-2022',
    role: 'Entrepreneur',
    image: '/image/nuray.jpg',
    story:
      "I am a Turkish Canadian. I could not speak English when I came to Canada. After joining some English classes, I enrolled in the Hospitality Class. This was not just an English class, it was much more than that, and it added a lot to my life. Every day, I learned so many things about the tourism sector while improving my English skills, such as reading, writing, speaking, and listening.\n\nBesides, I learned about Canadian workplace culture and rules, how to write emails, cover letters, and resumes. I also earned many certifications that helped me in my job later, such as Food Safety, First Aid, and WHMIS. Many professionals from various institutions in PEI came and gave informative presentations. I even had the chance to do job shadowing at a pharmacy as a pharmacy assistant.\n\nI got to visit many places across our island and even had the opportunity to be a tour guide - it was an amazing experience. Our class consisted of very friendly people, and I made many friends.\n\nThe most important thing is that Beverley is a great instructor. She put in a lot of effort for us every day from September to June. She is so helpful that she still supports us even after the class.\n\nI found out about this class by chance, and it was a great opportunity for me to be a part of it. When I told my friends living in different parts of Canada about this program, I learned that there is not a class like this in other provinces. We are so lucky.",
    quote: 'Thank you so much, Beverley, for everything.',
  },
];

export default function StudentJourney() {
  return (
    <div className="bg-background text-on-surface">
      <SEO
        title="Student Journey & Success Stories | ELT Hospitality"
        description="Read ELT Hospitality student journey stories and career outcomes from graduates working in hospitality roles across Prince Edward Island."
        keywords="Student Journey, ELT Success Stories, Hospitality Careers, PEI, Charlottetown"
        path="/journey"
      />
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
                src="/image/2026.jpg"
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
   

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <h2 className="font-display text-[28px] font-semibold text-on-background mb-10">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {stories.map((story) => (
              <div
                key={story.name}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-5"
              >
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-surface-container-low flex-shrink-0"
                  />
                  <div>
                    <p className="font-display text-xl font-bold text-on-surface">
                      {story.name}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="text-[11px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {story.classYear}
                      </span>
                      <span className="text-[11px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600">
                        {story.role}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed whitespace-pre-line text-[15px]">
                  {story.story}
                </p>
                <div className="pt-4 border-t border-zinc-100">
                  <Quote className="w-6 h-6 text-primary-fixed mb-2" />
                  <p className="text-tertiary italic">
                    "{story.quote}"
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
