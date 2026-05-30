import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, companyInfo } from '../../data/mockData';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src={companyInfo.logo}
                alt={companyInfo.name}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 rounded-full ${
                    location.pathname === link.path
                      ? 'text-cyan-400'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center px-5 py-2.5 text-[13px] font-medium rounded-full transition-all duration-300 bg-white text-black hover:shadow-[0_0_20px_-5px_hsla(180,100%,50%,0.3)]"
              >
                Book a Consultation
              </Link>

              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="lg:hidden p-2 rounded-full text-white/70 transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '72px', background: 'rgba(5, 5, 8, 0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col px-8 py-8 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-3 text-[18px] font-medium transition-colors border-b border-white/[0.04] ${
                location.pathname === link.path ? 'text-cyan-400' : 'text-white/40 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-white text-black text-[15px] font-medium rounded-full"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
