import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

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
      className={`sticky top-0 z-50 bg-white border-b border-zinc-200 transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold text-primary uppercase tracking-wide">
            ELT Hospitality
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const active =
              link.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-display text-[14px] font-semibold tracking-wide uppercase transition-colors duration-150 pb-0.5 ${
                  active
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-zinc-600 hover:text-primary border-b-2 border-transparent'
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
          className="hidden md:inline-flex items-center bg-primary text-white px-6 py-2.5 rounded-lg font-display font-bold text-sm uppercase tracking-wide hover:bg-primary-container active:scale-95 transition-all duration-150 shadow-sm"
        >
          Apply Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-6 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active =
              link.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`py-2.5 px-3 rounded-lg font-display text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active
                    ? 'bg-primary/10 text-primary'
                    : 'text-zinc-700 hover:bg-zinc-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 text-center bg-primary text-white py-3 rounded-lg font-display font-bold text-sm uppercase tracking-wide hover:bg-primary-container transition-all"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
