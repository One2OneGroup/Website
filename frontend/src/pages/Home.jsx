import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  heroData, trustStrip, services, aboutMetrics,
  whyChooseUs, solutionsTabs, caseStudies,
  testimonials, bpoFeatures
} from '../data/mockData';
import AnimatedSection, { AnimatedCounter } from '../components/shared/AnimatedSection';
import {
  ArrowRight, ArrowUpRight, Brain, Globe, Smartphone,
  Building2, Zap, Settings, ChevronRight, Quote,
  BarChart3, Shield, Target, TrendingUp,
  Layers, Users, Lightbulb, Award
} from 'lucide-react';

const iconMap = { Brain, Globe, Smartphone, Building2, Zap, Settings };

/* ─── Hero Section ─── */
const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)', backgroundSize: '400% 400%', animation: 'gradientShift 15s ease infinite' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />
      {/* Ambient light orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px] pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/60 text-xs font-medium tracking-wide">Strategic Consulting & Digital Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.08] tracking-tight mb-6">
              {heroData.headline}
            </h1>

            <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-[540px] mb-10">
              {heroData.subheadline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black text-[14px] font-semibold rounded-full"
              >
                {heroData.cta1}
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="btn-secondary inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/20 text-white text-[14px] font-medium rounded-full hover:bg-white/10"
              >
                {heroData.cta2}
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right - Floating Dashboard Visual */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Main dashboard card */}
            <div
              className="dashboard-card absolute top-8 right-4 w-[340px] rounded-2xl p-6 float-animation"
              style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/40 text-xs font-medium uppercase tracking-wider">Performance</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">94.7%</div>
              <div className="text-emerald-400/80 text-sm mb-4 flex items-center gap-1">
                <TrendingUp size={14} /> +12.3% this quarter
              </div>
              <div className="flex gap-2">
                {[65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/[0.06] rounded-full overflow-hidden h-20 flex items-end">
                    <div className="w-full bg-white/20 rounded-full" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
            </div>

            {/* AI card */}
            <div
              className="dashboard-card absolute top-0 left-0 w-[200px] rounded-xl p-4 float-slow"
              style={{ transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`, animationDelay: '1s' }}
            >
              <Brain size={20} className="text-white/40 mb-3" />
              <div className="text-white text-sm font-semibold mb-1">AI Integration</div>
              <div className="text-white/40 text-xs">Active across 12 modules</div>
              <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-white/30 rounded-full" />
              </div>
            </div>

            {/* BPO card */}
            <div
              className="dashboard-card absolute bottom-12 left-8 w-[220px] rounded-xl p-4 float-reverse"
              style={{ transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)` }}
            >
              <Settings size={20} className="text-white/40 mb-3" />
              <div className="text-white text-sm font-semibold mb-1">Operations</div>
              <div className="text-white/40 text-xs mb-3">BPO efficiency metrics</div>
              <div className="grid grid-cols-3 gap-2">
                {['98%', '24/7', '40+'].map((val, i) => (
                  <div key={i} className="text-center">
                    <div className="text-white text-sm font-bold">{val}</div>
                    <div className="text-white/30 text-[9px]">{['SLA', 'Support', 'Clients'][i]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Small floating dots */}
            <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-white/10 float-animation" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-white/15 float-slow" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

/* ─── Trust Strip ─── */
const TrustStripSection = () => (
  <section className="bg-white border-b border-gray-100">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
        {trustStrip.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="text-center lg:text-left">
              <h3 className="text-[14px] font-semibold text-black mb-2 tracking-tight">{item.title}</h3>
              <p className="text-gray-400 text-[12px] leading-relaxed">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Services Overview ─── */
const ServicesOverview = () => (
  <section className="bg-[#fafafa] py-28">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-black tracking-tight leading-tight">
            Integrated Solutions Across<br className="hidden md:block" /> Six Core Disciplines
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <AnimatedSection key={service.id} delay={i * 0.08}>
              <Link to="/services" className="service-card group block bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  <Icon size={22} className="text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-[18px] font-semibold text-black mb-3 tracking-tight">{service.title}</h3>
                <p className="text-gray-400 text-[14px] leading-relaxed mb-6">{service.shortDesc}</p>
                <span className="inline-flex items-center gap-1.5 text-black text-[13px] font-medium group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─── About / Positioning ─── */
const AboutPositioning = () => (
  <section className="bg-white py-28">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <AnimatedSection>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4 block">About One 2 One Group</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight mb-6">
            Strategy Meets Execution.<br />Consulting Meets Capability.
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-6">
            One 2 One Group is a multi-disciplinary consulting and execution partner. We combine strategic advisory with deep technical capability across AI, digital products, property valuations, energy consulting, and business process outsourcing.
          </p>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
            Our approach is simple: understand the business challenge, design the optimal solution, and execute with precision. We partner with organisations that value substance over spectacle and outcomes over outputs.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-black text-[14px] font-semibold animated-underline"
          >
            Learn More About Us <ArrowUpRight size={16} />
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-2 gap-5">
            {aboutMetrics.map((metric, i) => (
              <div key={i} className="bg-[#fafafa] rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-gray-400 text-[13px] font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─── Why Choose Us ─── */
const WhyChooseUsSection = () => (
  <section className="bg-[#0a0a0a] py-28 relative overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-50" />
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
      <AnimatedSection>
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Our Differentiators</span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
            Why Leading Organisations<br className="hidden md:block" /> Choose One 2 One Group
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyChooseUs.map((item, i) => {
          const icons = [Layers, Target, TrendingUp, Lightbulb, Shield, Award];
          const Icon = icons[i];
          return (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-500">
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center mb-5">
                  <Icon size={20} className="text-white/40" />
                </div>
                <h3 className="text-white text-[16px] font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─── Interactive Solutions / Industries ─── */
const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Solutions</span>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-black tracking-tight leading-tight">
              Tailored for Your Business Reality
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {solutionsTabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-black text-white'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="tab-content-enter max-w-3xl mx-auto text-center" key={activeTab}>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
              {solutionsTabs[activeTab].title}
            </h3>
            <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
              {solutionsTabs[activeTab].description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {solutionsTabs[activeTab].services.map((s, i) => (
                <span key={i} className="px-4 py-2 bg-gray-50 rounded-full text-[13px] text-gray-600 font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

/* ─── Case Studies ─── */
const CaseStudiesSection = () => {
  const categoryColors = {
    AI: 'bg-violet-50 text-violet-600',
    Web: 'bg-blue-50 text-blue-600',
    Mobile: 'bg-emerald-50 text-emerald-600',
    Property: 'bg-amber-50 text-amber-600',
    Energy: 'bg-orange-50 text-orange-600',
    BPO: 'bg-gray-100 text-gray-600',
  };

  return (
    <section className="bg-[#fafafa] py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Featured Case Studies</h2>
            </div>
            <Link to="/capabilities" className="inline-flex items-center gap-2 text-black text-[14px] font-semibold animated-underline">
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.id} delay={i * 0.08}>
              <div className="premium-card bg-white rounded-2xl p-7 border border-gray-100 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-semibold ${categoryColors[study.category]}`}>
                    {study.category}
                  </span>
                </div>
                <h3 className="text-[17px] font-semibold text-black mb-3 tracking-tight">{study.title}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed mb-4 flex-1">{study.challenge}</p>
                <div className="pt-4 border-t border-gray-50">
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    <span className="font-semibold text-black">Outcome:</span> {study.outcome}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── BPO Feature Section ─── */
const BPOSection = () => (
  <section className="bg-white py-28">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <AnimatedSection>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Business Process Outsourcing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight mb-6">
            Operational Excellence,<br />Professionally Managed
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
            Scale your operations without scaling your overhead. Our BPO services provide professional, consistent support across customer-facing and back-office functions — enabling your team to focus on strategic priorities while we handle the operational detail.
          </p>
          <Link
            to="/bpo"
            className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 bg-black text-white text-[14px] font-semibold rounded-full"
          >
            Explore BPO Services <ArrowRight size={16} />
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bpoFeatures.map((feature, i) => (
              <div key={i} className="bg-[#fafafa] rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <h4 className="text-[14px] font-semibold text-black mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-[13px] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─── Testimonials ─── */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="bg-[#fafafa] py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Client Perspectives</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Trusted by Industry Leaders</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <Quote size={32} className="text-gray-200 mx-auto mb-8" />
            <div className="min-h-[180px] flex items-center justify-center">
              <div key={active} className="tab-content-enter">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-8">
                  "{testimonials[active].quote}"
                </p>
                <div>
                  <p className="text-black font-semibold text-[15px]">{testimonials[active].author}</p>
                  <p className="text-gray-400 text-[13px]">{testimonials[active].role}, {testimonials[active].company}</p>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); clearInterval(intervalRef.current); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? 'w-8 bg-black' : 'w-1.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

/* ─── CTA Banner ─── */
const CTABanner = () => (
  <section className="bg-[#0a0a0a] py-28 relative overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-40" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px]" />

    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
      <AnimatedSection>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-white tracking-tight leading-tight mb-6">
            Build Smarter. Operate Better.<br className="hidden md:block" /> Scale with Confidence.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Ready to transform your business? Connect with our team to explore how One 2 One Group can accelerate your next chapter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-[14px] font-semibold rounded-full"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white text-[14px] font-medium rounded-full hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Home Page ─── */
const Home = () => {
  return (
    <main>
      <HeroSection />
      <TrustStripSection />
      <ServicesOverview />
      <AboutPositioning />
      <WhyChooseUsSection />
      <SolutionsSection />
      <CaseStudiesSection />
      <BPOSection />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
};

export default Home;
