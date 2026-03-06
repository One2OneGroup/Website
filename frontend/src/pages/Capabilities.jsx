import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/mockData';
import AnimatedSection from '../components/shared/AnimatedSection';
import { ArrowRight, X, ArrowUpRight } from 'lucide-react';

const filterTabs = ['All', 'AI', 'Web', 'Mobile', 'Property', 'Energy', 'BPO'];

const Capabilities = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState(null);

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(s => s.category === activeFilter);

  return (
    <main>
      {/* Hero */}
      <section className="hero-bg relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Capabilities & Case Studies</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
              Proven Outcomes Across <span className="text-gradient">Every Discipline</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl">
              Explore how we have helped organisations overcome challenges, seize opportunities, and achieve measurable results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="relative py-20" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-divider" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-12">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 border ${
                    activeFilter === tab
                      ? 'tab-active'
                      : 'border-transparent bg-white/[0.03] text-white/40 hover:bg-white/[0.06] hover:text-white/60'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((study, i) => (
              <AnimatedSection key={study.id} delay={i * 0.06}>
                <button
                  onClick={() => setSelectedStudy(study)}
                  className="service-card-futuristic text-left w-full p-7 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold category-badge-${study.category}`}>
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-white mb-3 tracking-tight">{study.title}</h3>
                  <p className="text-white/30 text-[14px] leading-relaxed mb-6 flex-1">{study.challenge}</p>
                  <span className="inline-flex items-center gap-1.5 text-cyan-400/60 text-[13px] font-medium">
                    View Details <ArrowUpRight size={14} />
                  </span>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setSelectedStudy(null)} />
          <div className="relative rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-10 z-10 border border-white/[0.06]" style={{ background: 'var(--bg-secondary)' }}>
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-colors text-white/50"
            >
              <X size={16} />
            </button>

            <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-semibold mb-4 category-badge-${selectedStudy.category}`}>
              {selectedStudy.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">{selectedStudy.title}</h2>

            <div className="space-y-6">
              <div>
                <h4 className="text-[13px] font-semibold text-cyan-400/50 uppercase tracking-wider mb-2">Challenge</h4>
                <p className="text-white/50 text-[15px] leading-relaxed">{selectedStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-[13px] font-semibold text-cyan-400/50 uppercase tracking-wider mb-2">Solution</h4>
                <p className="text-white/50 text-[15px] leading-relaxed">{selectedStudy.solution}</p>
              </div>
              <div>
                <h4 className="text-[13px] font-semibold text-cyan-400/50 uppercase tracking-wider mb-2">Outcome</h4>
                <p className="text-white/70 text-[15px] leading-relaxed font-medium">{selectedStudy.outcome}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <Link
                to="/contact"
                onClick={() => setSelectedStudy(null)}
                className="btn-accent inline-flex items-center gap-2.5 px-7 py-3.5 text-[14px] font-semibold rounded-full"
              >
                Discuss a Similar Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[180px]" style={{ background: 'hsla(180, 100%, 50%, 0.03)' }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Your Next Success Story <span className="text-gradient">Starts Here</span>
            </h2>
            <p className="text-white/35 text-lg max-w-xl mx-auto mb-10">
              Let us understand your challenges and design a solution that delivers measurable results.
            </p>
            <Link to="/contact" className="btn-primary relative z-10 inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-[14px] font-semibold rounded-full">
              Start a Project <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Capabilities;
