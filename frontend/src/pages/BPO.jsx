import React from 'react';
import { Link } from 'react-router-dom';
import { bpoFeatures } from '../data/mockData';
import AnimatedSection from '../components/shared/AnimatedSection';
import {
  ArrowRight, TrendingUp, Shield, Layers, Target, BarChart3, Users, Check
} from 'lucide-react';

const BPO = () => {
  const engagementModel = [
    { step: '01', title: 'Assessment', desc: 'We analyse your current operations, identify inefficiencies, and map the processes best suited for outsourcing.' },
    { step: '02', title: 'Design', desc: 'We design a tailored BPO solution with defined workflows, quality frameworks, and performance metrics.' },
    { step: '03', title: 'Transition', desc: 'We manage a structured transition process, ensuring knowledge transfer and operational continuity.' },
    { step: '04', title: 'Operate', desc: 'We deliver consistent, high-quality operational support with regular reporting and continuous improvement.' },
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Improved Efficiency', desc: 'Streamlined processes that reduce turnaround times and eliminate bottlenecks.' },
    { icon: Shield, title: 'Consistent Quality', desc: 'Rigorous quality frameworks that maintain standards across all operations.' },
    { icon: Layers, title: 'Scalable Capacity', desc: 'Flexible operational capacity that adapts to your business demands.' },
    { icon: Target, title: 'Strategic Focus', desc: 'Free your core team to concentrate on growth and innovation.' },
    { icon: BarChart3, title: 'Cost Optimisation', desc: 'Reduce overhead without compromising on service delivery quality.' },
    { icon: Users, title: 'Professional Teams', desc: 'Access skilled, managed teams aligned with your brand and processes.' },
  ];

  const functions = [
    'Customer Support & Service Desk', 'Back-Office Administration', 'Data Entry & Processing',
    'Document Management', 'Order Processing & Fulfilment Support', 'HR Administration Support',
    'Financial Administration', 'Email & Chat Support', 'Quality Assurance Operations',
    'Reporting & Analytics Support', 'Vendor Management Support', 'Workflow Coordination',
  ];

  return (
    <main>
      {/* Hero */}
      <section className="hero-bg relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Business Process Outsourcing</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
              Professional Operations. <span className="text-gradient">Scalable Delivery.</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              One 2 One Group provides professional business process outsourcing that improves efficiency, maintains quality, and enables your team to focus on what matters most — growth.
            </p>
            <Link to="/contact" className="btn-primary relative z-10 inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black text-[14px] font-semibold rounded-full">
              Discuss BPO Solutions <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Provide */}
      <section className="relative py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-divider" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">What We Provide</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Comprehensive <span className="text-gradient">Operational Support</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bpoFeatures.map((feature) => (
              <AnimatedSection key={feature.title} delay={0.08}>
                <div className="service-card-futuristic p-8 h-full">
                  <h3 className="text-[17px] font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/30 text-[14px] leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="relative py-28" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 grid-pattern-dense opacity-20" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Functions We Support</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                From Front Office to <span className="text-gradient">Back Office</span>
              </h2>
              <p className="text-white/40 text-[16px] leading-relaxed">
                We support a broad range of business functions, providing professional managed services that maintain your brand standards while improving operational throughput.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {functions.map((fn) => (
                  <div key={fn} className="flex items-center gap-3 glow-card px-5 py-3.5">
                    <Check size={14} className="text-cyan-400/40 shrink-0" />
                    <span className="text-[13px] text-white/45 font-medium">{fn}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-divider" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Why Outsource With Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The Operational <span className="text-gradient">Advantage</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={benefit.title} delay={0.08}>
                  <div className="glass-card p-8 h-full">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/[0.06] border border-cyan-500/10 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-cyan-400/50" />
                    </div>
                    <h3 className="text-[16px] font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/30 text-[14px] leading-relaxed">{benefit.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[200px] orb-1" style={{ background: 'hsla(180, 100%, 50%, 0.03)' }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our <span className="text-gradient">Engagement Model</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {engagementModel.map((item) => (
              <AnimatedSection key={item.step} delay={0.1}>
                <div className="glass-card p-8 h-full">
                  <span className="text-3xl font-bold text-cyan-400/10 block mb-4">{item.step}</span>
                  <h3 className="text-white text-[17px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/30 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-divider" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center pt-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Ready to Optimise Your <span className="text-gradient">Operations?</span>
            </h2>
            <p className="text-white/35 text-lg max-w-xl mx-auto mb-10">
              Let us show you how professional BPO can transform your operational efficiency.
            </p>
            <Link to="/contact" className="btn-primary relative z-10 inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-[14px] font-semibold rounded-full">
              Start the Conversation <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default BPO;
