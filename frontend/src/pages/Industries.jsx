import React from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../data/mockData';
import AnimatedSection from '../components/shared/AnimatedSection';
import {
  ArrowRight, Building2, Briefcase, ShoppingBag,
  Home as HomeIcon, Users, Zap
} from 'lucide-react';

const industryIcons = [Building2, Briefcase, ShoppingBag, HomeIcon, Users, Zap];

const Industries = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Industries & Solutions</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
              Solutions Shaped by <span className="text-gradient">Sector Expertise</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl">
              We serve organisations across diverse industries, combining deep domain knowledge with cross-sector capabilities to deliver outcomes that matter.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-divider" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, i) => {
              const Icon = industryIcons[i];
              return (
                <AnimatedSection key={industry.id} delay={i * 0.08}>
                  <div className="service-card-futuristic group p-8 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/[0.06] border border-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-500">
                      <Icon size={22} className="text-cyan-400/50 group-hover:text-cyan-300 transition-colors duration-500" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-white mb-3 tracking-tight">{industry.title}</h3>
                    <p className="text-white/30 text-[14px] leading-relaxed mb-6 flex-1">{industry.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {industry.services.map((s, j) => (
                        <span key={j} className="px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full text-[11px] text-white/40 font-medium">{s}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-cyan-400/60 text-[13px] font-medium group-hover:gap-3 transition-all duration-300">
                      Discuss Your Needs <ArrowRight size={14} />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-sector */}
      <section className="relative py-28" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 grid-pattern-dense opacity-20" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Cross-Sector Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                Insights That Travel <span className="text-gradient">Across Industries</span>
              </h2>
              <p className="text-white/40 text-[16px] leading-relaxed mb-6">
                Our multi-sector experience means we bring proven methodologies and fresh perspectives to every engagement. Innovations that work in one industry often unlock value in another.
              </p>
              <p className="text-white/30 text-[15px] leading-relaxed">
                Whether you are a growing SME, an established corporate, or an organisation navigating digital transformation, our integrated capabilities ensure you receive a solution designed for your specific context.
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
                  <div key={i} className="metric-card p-8 text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <p className="text-white/35 text-[13px] font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-divider" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center pt-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Let's Discuss Your <span className="text-gradient">Industry Challenges</span>
            </h2>
            <p className="text-white/35 text-lg max-w-xl mx-auto mb-10">
              Connect with our team to explore how our multi-sector expertise can address your specific business needs.
            </p>
            <Link to="/contact" className="btn-primary relative z-10 inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-[14px] font-semibold rounded-full">
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Industries;
