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
    <footer className="bg-[#0a0a0a] text-white">
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
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-[280px]">
              Multi-disciplinary consulting, digital solutions, and business process outsourcing.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'X', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 text-xs hover:border-white hover:text-white transition-colors duration-300"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">Company</h4>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <p className="text-gray-400 text-sm">{companyInfo.phone}</p>
              <p className="text-gray-400 text-sm">{companyInfo.email}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{companyInfo.address}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white text-sm mt-2 group"
              >
                Book a Consultation
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} {companyInfo.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-xs hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-gray-500 text-xs hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
