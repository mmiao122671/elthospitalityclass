import { Link } from 'react-router-dom';
import { MapPin, Phone, Facebook } from 'lucide-react';
import logo from '../../image/logo.jpg';

const quickLinks = [
  { label: 'About Program', to: '/program' },
  // { label: 'Curriculum', to: '/program' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Student Journey', to: '/journey' },
  { label: 'How to Apply', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-100 border-t border-zinc-200">
      <div className="max-w-container mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="ELT and Hospitality Class program logo"
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <span className="font-display font-bold text-primary uppercase tracking-wide text-lg">
                ELT Hospitality
              </span>
            </Link>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
            Employment Language Training
            </p>
            <span className="inline-flex items-center gap-2 text-xs text-zinc-500 font-semibold uppercase tracking-widest">
              <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-[9px] font-black">CA</span>
              </span>
              IRCC Funded Program
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-primary uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 text-zinc-600 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Holland College Belmont Centre, Room 217
                  <br />
                  34 Belmont Street
                  <br />
                  Charlottetown, PE C1A 5H1
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(902) 628-7014</span>
              </div>
            </div>
          </div>

          {/* Quick links + Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-primary uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-zinc-600 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100052566775944"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-600 hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        {/* <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="font-display font-bold text-primary uppercase tracking-wider text-sm">
              Holland College
            </span>
            <span className="h-4 w-px bg-zinc-300" />
            <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">
              IRCC Funded
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} Holland College ELT Hospitality Program.</span>
            <a href="#" className="hover:text-primary underline transition-colors">
              Privacy Policy
            </a>
            <Link to="/contact" className="hover:text-primary underline transition-colors">
              Contact
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
