import React from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../data/mockData';
import AnimatedSection from '../components/shared/AnimatedSection';
import {
  ArrowRight, ArrowUpRight, Building2, Briefcase, ShoppingBag,
  Home as HomeIcon, Users, Zap
} from 'lucide-react';

const industryIcons = [Building2, Briefcase, ShoppingBag, HomeIcon, Users, Zap];

const Industries = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Industries & Solutions</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
              Solutions Shaped by Sector Expertise
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              We serve organisations across diverse industries, combining deep domain knowledge with cross-sector capabilities to deliver outcomes that matter.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-white py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, i) => {
              const Icon = industryIcons[i];
              return (
                <AnimatedSection key={industry.id} delay={i * 0.08}>
                  <div className="service-card group bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-500">
                      <Icon size={22} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-black mb-3 tracking-tight">{industry.title}</h3>
                    <p className="text-gray-400 text-[14px] leading-relaxed mb-6 flex-1">{industry.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {industry.services.map((s, j) => (
                        <span key={j} className="px-3 py-1.5 bg-gray-50 rounded-full text-[11px] text-gray-500 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-black text-[13px] font-medium group-hover:gap-3 transition-all duration-300"
                    >
                      Discuss Your Needs <ArrowRight size={14} />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-sector value */}
      <section className="bg-[#fafafa] py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Cross-Sector Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight mb-6">
                Insights That Travel Across Industries
              </h2>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-6">
                Our multi-sector experience means we bring proven methodologies and fresh perspectives to every engagement. Innovations that work in one industry often unlock value in another — and we make those connections for our clients.
              </p>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                Whether you are a growing SME, an established corporate, or an organisation navigating digital transformation, our integrated capabilities ensure you receive a solution designed for your specific context and ambitions.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '6+', label: 'Industry Verticals' },
                  { value: '150+', label: 'Projects Delivered' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '12+', label: 'Service Capabilities' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-8 text-center premium-card">
                    <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                    <p className="text-gray-400 text-[13px] font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Let's Discuss Your Industry Challenges
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Connect with our team to explore how our multi-sector expertise can address your specific business needs.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-[14px] font-semibold rounded-full"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Industries;
