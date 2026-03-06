import React from 'react';
import { Link } from 'react-router-dom';
import { aboutPage, aboutMetrics, companyInfo } from '../data/mockData';
import AnimatedSection, { AnimatedCounter } from '../components/shared/AnimatedSection';
import { ArrowRight, Target, Eye, Heart, Users, Zap, Shield } from 'lucide-react';

const valueIcons = [Target, Shield, Zap, Users, Heart, Eye];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
              A Trusted Partner in <span className="text-gradient">Strategy, Technology & Operations</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl">
              {aboutPage.overview}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-divider" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutMetrics.map((metric, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="metric-card p-8 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </div>
                  <p className="text-white/35 text-[14px] font-medium">{metric.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-28" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 grid-pattern-dense opacity-30" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <div className="glass-card p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-6">
                  <Target size={22} className="text-cyan-400/60" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Our Mission</h3>
                <p className="text-white/40 text-[16px] leading-relaxed">{aboutPage.mission}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-6">
                  <Eye size={22} className="text-cyan-400/60" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Our Vision</h3>
                <p className="text-white/40 text-[16px] leading-relaxed">{aboutPage.vision}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-divider" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The Principles That <span className="text-gradient">Guide Us</span></h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aboutPage.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="glass-card p-8 h-full">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/[0.06] border border-cyan-500/10 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-cyan-400/50" />
                    </div>
                    <h3 className="text-[17px] font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-white/30 text-[14px] leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative py-28" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 grid-pattern-dense opacity-20" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                Strategy First. <span className="text-gradient">Execution Always.</span>
              </h2>
              <p className="text-white/40 text-[16px] leading-relaxed mb-6">{aboutPage.differentiators}</p>
              <p className="text-white/30 text-[15px] leading-relaxed">
                Every engagement begins with a thorough understanding of your business context. We then design a solution architecture that addresses immediate needs while building towards long-term objectives.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Discovery & Assessment', desc: 'Deep-dive into your business context, challenges, and aspirations.' },
                  { step: '02', title: 'Strategy & Design', desc: 'Craft a tailored solution architecture aligned with your objectives.' },
                  { step: '03', title: 'Execution & Delivery', desc: 'Implement with precision, transparency, and rigorous quality control.' },
                  { step: '04', title: 'Optimisation & Scale', desc: 'Continuously refine, measure impact, and scale what works.' },
                ].map((item, i) => (
                  <div key={i} className="glow-card flex gap-6 items-start p-6">
                    <span className="text-[32px] font-bold text-cyan-400/15 shrink-0 w-12">{item.step}</span>
                    <div>
                      <h4 className="text-[15px] font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-white/30 text-[13px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-divider" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[180px]" style={{ background: 'hsla(180, 100%, 50%, 0.03)' }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center pt-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Ready to Work with a Partner Who <span className="text-gradient">Delivers?</span>
            </h2>
            <p className="text-white/35 text-lg max-w-xl mx-auto mb-10">
              Connect with our team to discuss how One 2 One Group can support your business goals.
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

export default About;
