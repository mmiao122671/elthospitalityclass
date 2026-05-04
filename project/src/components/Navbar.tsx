import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../image/logo.jpg';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Program Details', to: '/program' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Student Journey', to: '/journey' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur transition-all duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-container mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <img
            src={logo}
            alt="ELT Hospitality"
            className="h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
          <span className="hidden sm:inline font-display text-lg lg:text-xl font-bold text-primary uppercase tracking-wide">
            ELT Hospitality
          </span>
          <span className="sr-only">ELT Hospitality</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/70 p-1">
          {navLinks.map((link) => {
            const active =
              link.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 font-display text-[13px] font-semibold tracking-wide uppercase transition-all duration-150 ${
                  active
                    ? 'bg-white text-primary shadow-sm ring-1 ring-zinc-200'
                    : 'text-zinc-600 hover:bg-white hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-primary text-white px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-primary-container hover:shadow-md active:translate-y-0"
        >
          Apply Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden rounded-lg border border-zinc-200 p-2 text-zinc-600 transition-colors hover:bg-zinc-100"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-4 pb-4 pt-3 shadow-sm sm:px-6">
          <div className="flex flex-col gap-1 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-2">
          {navLinks.map((link) => {
            const active =
              link.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`rounded-xl px-3 py-2.5 font-display text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active
                    ? 'bg-primary/10 text-primary'
                    : 'text-zinc-700 hover:bg-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 rounded-xl bg-primary py-3 text-center font-display text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-primary-container"
          >
            Apply Now
          </Link>
          </div>
        </div>
      )}
    </header>
  );
}
