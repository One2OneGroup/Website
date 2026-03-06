import React from 'react';
import AnimatedSection from '../components/shared/AnimatedSection';

const PrivacyPolicy = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Legal</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
              Privacy <span className="text-gradient">Policy</span>
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
                <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                <p>One 2 One Group (Pty) Ltd ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.</p>
                <p className="mt-3">By accessing our website or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="text-white/70 font-medium">Personal Information:</span> Name, email address, phone number, company name, and any other information you voluntarily provide through our contact forms or direct communication.</li>
                  <li><span className="text-white/70 font-medium">Usage Data:</span> Information about how you access and use our website, including your IP address, browser type, pages visited, time spent on pages, and referring URLs.</li>
                  <li><span className="text-white/70 font-medium">Cookies and Tracking:</span> We use cookies and similar tracking technologies to track activity on our website and store certain information to improve your experience.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To respond to your enquiries and provide the services you request</li>
                  <li>To communicate with you about our services, updates, and promotional offers</li>
                  <li>To improve our website, services, and customer experience</li>
                  <li>To monitor and analyse usage patterns and trends</li>
                  <li>To comply with legal obligations and protect our rights</li>
                  <li>To detect, prevent, and address technical issues or security breaches</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">4. Disclosure of Your Information</h2>
                <p className="mb-3">We may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="text-white/70 font-medium">Service Providers:</span> With third-party vendors and service providers who perform services on our behalf, such as hosting, analytics, and customer support.</li>
                  <li><span className="text-white/70 font-medium">Legal Requirements:</span> If required to do so by law or in response to valid requests by public authorities.</li>
                  <li><span className="text-white/70 font-medium">Business Transfers:</span> In connection with any merger, acquisition, or sale of company assets.</li>
                  <li><span className="text-white/70 font-medium">With Your Consent:</span> For any other purpose with your explicit consent.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">5. Data Security</h2>
                <p>We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">6. Data Retention</h2>
                <p>We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When your information is no longer required, we will securely delete or anonymise it.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">7. Your Rights</h2>
                <p className="mb-3">In accordance with the Protection of Personal Information Act (POPIA) of South Africa, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to the processing of your personal information</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Lodge a complaint with the Information Regulator</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">8. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party website you visit.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this policy periodically for any changes.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">10. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
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

export default PrivacyPolicy;
