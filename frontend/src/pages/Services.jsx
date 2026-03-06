import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/mockData';
import AnimatedSection from '../components/shared/AnimatedSection';
import {
  ArrowRight, Brain, Globe, Smartphone, Building2, Zap, Settings,
  Check, ChevronDown, ChevronUp
} from 'lucide-react';

const iconMap = { Brain, Globe, Smartphone, Building2, Zap, Settings };

const ServiceDetail = ({ service, index }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[service.icon];
  const isEven = index % 2 === 0;

  return (
    <section className={`py-24 ${isEven ? 'bg-white' : 'bg-[#fafafa]'}`} id={service.id}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          <AnimatedSection>
            <div className={!isEven ? 'lg:order-2' : ''}>
              <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-6">
                <Icon size={26} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight mb-4">
                {service.title}
              </h2>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
                {service.fullDesc}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-gray-600" />
                    </div>
                    <span className="text-[14px] text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Expandable Details */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 text-black text-[14px] font-semibold mb-6 hover:gap-3 transition-all duration-300"
              >
                {expanded ? 'Show Less' : 'View Benefits & Ideal Client'}
                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {expanded && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h4 className="text-[14px] font-semibold text-black mb-3 uppercase tracking-wider">Key Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                          <span className="text-[14px] text-gray-500 leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-black mb-2 uppercase tracking-wider">Ideal Client</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed">{service.idealClient}</p>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 bg-black text-white text-[14px] font-semibold rounded-full"
                >
                  Discuss This Service <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className={`${!isEven ? 'lg:order-1' : ''}`}>
              {/* Visual placeholder - abstract representation */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 aspect-square flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-gray-200 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center">
                        <Icon size={32} className="text-gray-300" />
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gray-200" />
                  <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-gray-200" />
                  <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-gray-300" />
                  <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
              Six Disciplines. One Integrated Partner.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              From AI consulting and full-stack development to property valuations, energy advisory, and business process outsourcing — we deliver expertise that drives results.
            </p>
          </AnimatedSection>

          {/* Quick nav */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap gap-3 mt-10">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-5 py-2.5 rounded-full border border-white/15 text-white/60 text-[13px] font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, i) => (
        <ServiceDetail key={service.id} service={service} index={i} />
      ))}

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Our team will help you identify the right combination of services to address your business challenges.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-[14px] font-semibold rounded-full"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Services;
