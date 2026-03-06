import React from 'react';
import AnimatedSection from '../components/shared/AnimatedSection';

const TermsOfService = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Legal</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-white/40 text-lg">Last updated: July 2025</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-20" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-divider" />
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 pt-8">
          <AnimatedSection>
            <div className="space-y-10 text-white/50 text-[15px] leading-relaxed">

              <div>
                <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using the website of One 2 One Group (Pty) Ltd ("Company", "we", "our", or "us"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our website or services.</p>
                <p className="mt-3">These terms apply to all visitors, users, and others who access or use our website and services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">2. Description of Services</h2>
                <p>One 2 One Group (Pty) Ltd provides consulting, digital solutions, and business process outsourcing services, including but not limited to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>AI Consulting and Implementation</li>
                  <li>Website Development and Digital Platforms</li>
                  <li>Full Stack Mobile Application Development</li>
                  <li>Property Valuation Services</li>
                  <li>Energy Sector Consulting and Solutions</li>
                  <li>Business Process Outsourcing (BPO) Services</li>
                </ul>
                <p className="mt-3">Specific terms for individual services may be provided in separate agreements and will supplement these general terms.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">3. Use of Website</h2>
                <p className="mb-3">You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the website. Prohibited conduct includes, but is not limited to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Using the website in any way that violates applicable local, national, or international law</li>
                  <li>Attempting to gain unauthorised access to any part of the website, server, or database</li>
                  <li>Introducing viruses, trojans, worms, or other malicious or technologically harmful material</li>
                  <li>Collecting or harvesting any personally identifiable information from the website</li>
                  <li>Using automated systems or software to extract data from the website (scraping)</li>
                  <li>Impersonating or attempting to impersonate the Company, its employees, or other users</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">4. Intellectual Property</h2>
                <p>All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of One 2 One Group (Pty) Ltd or its content suppliers and is protected by South African and international intellectual property laws.</p>
                <p className="mt-3">You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from our website without our prior written consent, except for temporary copies stored in your browser cache for personal, non-commercial use.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">5. Confidentiality</h2>
                <p>Any information shared between parties during the course of engagement, including business strategies, technical specifications, client data, and proprietary methodologies, shall be treated as confidential. Neither party shall disclose confidential information to third parties without prior written consent, except where required by law.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p>To the fullest extent permitted by applicable law, One 2 One Group (Pty) Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Your access to or use of (or inability to access or use) our website or services</li>
                  <li>Any conduct or content of any third party on our website</li>
                  <li>Any content obtained from our website</li>
                  <li>Unauthorised access, use, or alteration of your transmissions or content</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
                <p>Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">8. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless One 2 One Group (Pty) Ltd, its directors, officers, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable legal fees) arising from your use of our website, violation of these Terms of Service, or infringement of any intellectual property or other right of any person or entity.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">9. Service Engagement Terms</h2>
                <p>All professional service engagements with One 2 One Group (Pty) Ltd are subject to separate service agreements that detail scope, deliverables, timelines, fees, and specific terms. These Terms of Service serve as a general framework and do not constitute a service agreement or commitment to deliver specific services.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">10. Governing Law</h2>
                <p>These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law provisions. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of the Western Cape, South Africa.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">11. Severability</h2>
                <p>If any provision of these Terms of Service is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these terms unenforceable or invalid as a whole. Such provisions shall be deleted without affecting the remaining provisions.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">12. Contact Us</h2>
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="mt-4 glass-card p-6 space-y-2">
                  <p className="text-white/70"><span className="text-white font-medium">One 2 One Group (Pty) Ltd</span></p>
                  <p>5 Timber Way, Bergvliet, Cape Town, South Africa, 7945</p>
                  <p>Phone: 021 100 3181</p>
                  <p>Email: tylor@theone2onegroup.co.za</p>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
