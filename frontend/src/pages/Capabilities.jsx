import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/mockData';
import AnimatedSection from '../components/shared/AnimatedSection';
import { ArrowRight, X, ArrowUpRight } from 'lucide-react';

const filterTabs = ['All', 'AI', 'Web', 'Mobile', 'Property', 'Energy', 'BPO'];

const categoryColors = {
  AI: 'bg-violet-50 text-violet-600',
  Web: 'bg-blue-50 text-blue-600',
  Mobile: 'bg-emerald-50 text-emerald-600',
  Property: 'bg-amber-50 text-amber-600',
  Energy: 'bg-orange-50 text-orange-600',
  BPO: 'bg-gray-100 text-gray-600',
};

const Capabilities = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState(null);

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(s => s.category === activeFilter);

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Capabilities & Case Studies</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
              Proven Outcomes Across Every Discipline
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Explore how we have helped organisations overcome challenges, seize opportunities, and achieve measurable results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Filters */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-12">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                    activeFilter === tab
                      ? 'bg-black text-white'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((study, i) => (
              <AnimatedSection key={study.id} delay={i * 0.06}>
                <button
                  onClick={() => setSelectedStudy(study)}
                  className="service-card text-left w-full bg-[#fafafa] rounded-2xl p-7 border border-transparent h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold ${categoryColors[study.category]}`}>
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-black mb-3 tracking-tight">{study.title}</h3>
                  <p className="text-gray-400 text-[14px] leading-relaxed mb-6 flex-1">{study.challenge}</p>
                  <span className="inline-flex items-center gap-1.5 text-black text-[13px] font-medium">
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
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedStudy(null)} />
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-10 z-10">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X size={16} />
            </button>

            <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-semibold mb-4 ${categoryColors[selectedStudy.category]}`}>
              {selectedStudy.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-6">{selectedStudy.title}</h2>

            <div className="space-y-6">
              <div>
                <h4 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Challenge</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">{selectedStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Solution</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">{selectedStudy.solution}</p>
              </div>
              <div>
                <h4 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Outcome</h4>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">{selectedStudy.outcome}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setSelectedStudy(null)}
                className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 bg-black text-white text-[14px] font-semibold rounded-full"
              >
                Discuss a Similar Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Your Next Success Story Starts Here
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Let us understand your challenges and design a solution that delivers measurable results.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-[14px] font-semibold rounded-full"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Capabilities;
