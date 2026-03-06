import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/mockData';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const serviceLinks = [
    { label: 'AI Consulting', path: '/services' },
    { label: 'Website Development', path: '/services' },
    { label: 'Mobile Apps', path: '/services' },
    { label: 'Property Valuations', path: '/services' },
    { label: 'Energy Consulting', path: '/services' },
    { label: 'BPO Services', path: '/bpo' },
  ];

  const companyLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Industries', path: '/industries' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer style={{ background: 'var(--bg-primary)' }}>
      <div className="section-divider" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={companyInfo.logo}
              alt={companyInfo.name}
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-white/30 text-sm leading-relaxed mb-6 max-w-[280px]">
              Multi-disciplinary consulting, digital solutions, and business process outsourcing.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'X', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 text-xs hover:border-cyan-500/30 hover:text-cyan-400/70 transition-all duration-300"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/40 mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-white/30 text-sm hover:text-white/60 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/40 mb-6">Company</h4>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-white/30 text-sm hover:text-white/60 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/40 mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <p className="text-white/30 text-sm">{companyInfo.phone}</p>
              <p className="text-white/30 text-sm">{companyInfo.email}</p>
              <p className="text-white/30 text-sm leading-relaxed">{companyInfo.address}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-cyan-400/70 text-sm mt-2 group animated-underline"
              >
                Book a Consultation
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} {companyInfo.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-white/20 text-xs hover:text-white/40 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/20 text-xs hover:text-white/40 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
