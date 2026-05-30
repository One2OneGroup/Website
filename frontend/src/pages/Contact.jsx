import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { companyInfo, services } from '../data/mockData';
import AnimatedSection from '../components/shared/AnimatedSection';
import { Phone, Mail, MapPin, ArrowRight, Check, Send, Loader2 } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const INITIAL_FORM = { fullName: '', companyName: '', email: '', phone: '', service: '', message: '' };

const validateForm = (data) => {
  const errors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Please enter a valid email';
  if (!data.message.trim()) errors.message = 'Message is required';
  return errors;
};

/* ─── Contact Details Panel ─── */
const ContactInfo = () => (
  <AnimatedSection>
    <h2 className="text-2xl font-bold text-white tracking-tight mb-8">Contact Details</h2>
    <div className="space-y-8">
      {[
        { Icon: Phone, label: 'Phone', value: companyInfo.phone },
        { Icon: Mail, label: 'Email', value: companyInfo.email },
        { Icon: MapPin, label: 'Office', value: companyInfo.address },
      ].map(({ Icon, label, value }) => (
        <div key={label} className="flex gap-4">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/[0.06] border border-cyan-500/10 flex items-center justify-center shrink-0">
            <Icon size={18} className="text-cyan-400/50" />
          </div>
          <div>
            <p className="text-[13px] text-white/30 font-medium mb-1">{label}</p>
            <p className="text-white text-[15px] font-medium leading-relaxed">{value}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-10 glass-card h-[240px] overflow-hidden">
      <iframe
        title="Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.4877!2d18.4534!3d-34.0675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzAzLjAiUyAxOMKwMjcnMTIuMiJF!5e0!3m2!1sen!2sza!4v1690000000000!5m2!1sen!2sza"
        width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale opacity-60 hover:opacity-80 transition-opacity"
      />
    </div>
  </AnimatedSection>
);

/* ─── Success State ─── */
const SuccessMessage = ({ onReset }) => (
  <div className="glass-card p-12 text-center">
    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
      <Check size={28} className="text-cyan-400" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">Thank You</h3>
    <p className="text-white/40 text-[16px] leading-relaxed max-w-md mx-auto mb-8">
      Your enquiry has been received. A member of our team will be in touch shortly.
    </p>
    <button onClick={onReset} className="inline-flex items-center gap-2 text-cyan-400/70 text-[14px] font-semibold animated-underline">
      Send Another Enquiry <ArrowRight size={14} />
    </button>
  </div>
);

/* ─── Form Input ─── */
const FormField = ({ label, required, error, children }) => (
  <div>
    <label className="text-[13px] font-medium text-white/50 mb-2 block">{label}{required && ' *'}</label>
    {children}
    {error && <p className="text-red-400/70 text-[12px] mt-1">{error}</p>}
  </div>
);

/* ─── Contact Form ─── */
const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, {
        full_name: formData.fullName, company_name: formData.companyName,
        email: formData.email, phone: formData.phone,
        service: formData.service, message: formData.message,
      });
      setSubmitted(true);
      setFormData(INITIAL_FORM);
    } catch {
      setErrors({ submit: 'Failed to submit enquiry. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  }, [formData]);

  if (submitted) {
    return <SuccessMessage onReset={() => setSubmitted(false)} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-2xl font-bold text-white tracking-tight mb-2">Send an Enquiry</h2>
      <p className="text-white/30 text-[14px] mb-8">Fill in the form below and our team will respond within 24 hours.</p>

      <div className="grid md:grid-cols-2 gap-5">
        <FormField label="Full Name" required error={errors.fullName}>
          <input type="text" value={formData.fullName} onChange={(e) => handleChange('fullName', e.target.value)}
            className={`input-futuristic w-full px-4 py-3 rounded-xl text-[14px] ${errors.fullName ? '!border-red-500/40' : ''}`}
            placeholder="Your full name" />
        </FormField>
        <FormField label="Company Name">
          <input type="text" value={formData.companyName} onChange={(e) => handleChange('companyName', e.target.value)}
            className="input-futuristic w-full px-4 py-3 rounded-xl text-[14px]" placeholder="Your company" />
        </FormField>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <FormField label="Email Address" required error={errors.email}>
          <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)}
            className={`input-futuristic w-full px-4 py-3 rounded-xl text-[14px] ${errors.email ? '!border-red-500/40' : ''}`}
            placeholder="you@company.com" />
        </FormField>
        <FormField label="Phone Number">
          <input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)}
            className="input-futuristic w-full px-4 py-3 rounded-xl text-[14px]" placeholder="+27 ..." />
        </FormField>
      </div>

      <FormField label="Service Required">
        <select value={formData.service} onChange={(e) => handleChange('service', e.target.value)}
          className="input-futuristic w-full px-4 py-3 rounded-xl text-[14px] appearance-none">
          <option value="" style={{ background: '#0a0a10' }}>Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.title} style={{ background: '#0a0a10' }}>{s.title}</option>
          ))}
          <option value="General Enquiry" style={{ background: '#0a0a10' }}>General Enquiry</option>
        </select>
      </FormField>

      <FormField label="Message" required error={errors.message}>
        <textarea value={formData.message} onChange={(e) => handleChange('message', e.target.value)} rows={5}
          className={`input-futuristic w-full px-4 py-3 rounded-xl text-[14px] resize-none ${errors.message ? '!border-red-500/40' : ''}`}
          placeholder="Tell us about your project or requirements..." />
      </FormField>

      {errors.submit && <p className="text-red-400/70 text-[13px]">{errors.submit}</p>}

      <button type="submit" disabled={submitting}
        className="btn-primary relative z-10 inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-[14px] font-semibold rounded-full disabled:opacity-60">
        {submitting ? (<>Submitting <Loader2 size={16} className="animate-spin" /></>) : (<>Send Enquiry <Send size={16} /></>)}
      </button>
    </form>
  );
};

/* ─── Contact Page ─── */
const Contact = () => (
  <main>
    <section className="hero-bg relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/50 mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
            Let's Build Something <span className="text-gradient">Exceptional Together</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl">
            Whether you have a specific project in mind or want to explore how we can support your business, we're ready to listen.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-28" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-divider" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.1}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
