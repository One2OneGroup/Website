import React, { useState } from 'react';
import axios from 'axios';
import { companyInfo, services } from '../data/mockData';
import AnimatedSection from '../components/shared/AnimatedSection';
import { Phone, Mail, MapPin, ArrowRight, Check, Send, Loader2 } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      try {
        await axios.post(`${API}/contact`, {
          full_name: formData.fullName,
          company_name: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        });
        setSubmitted(true);
        setFormData({ fullName: '', companyName: '', email: '', phone: '', service: '', message: '' });
      } catch (err) {
        console.error('Submission error:', err);
        setErrors({ submit: 'Failed to submit enquiry. Please try again.' });
      } finally {
        setSubmitting(false);
      }
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] max-w-3xl mb-6">
              Let's Build Something Exceptional Together
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Whether you have a specific project in mind or want to explore how we can support your business, we're ready to listen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-black tracking-tight mb-8">Contact Details</h2>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-400 font-medium mb-1">Phone</p>
                      <p className="text-black text-[15px] font-medium">{companyInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-400 font-medium mb-1">Email</p>
                      <p className="text-black text-[15px] font-medium">{companyInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-400 font-medium mb-1">Office</p>
                      <p className="text-black text-[15px] font-medium leading-relaxed">{companyInfo.address}</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-10 bg-gray-50 rounded-2xl h-[240px] overflow-hidden">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.4877!2d18.4534!3d-34.0675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzAzLjAiUyAxOMKwMjcnMTIuMiJF!5e0!3m2!1sen!2sza!4v1690000000000!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                {submitted ? (
                  <div className="bg-[#fafafa] rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6">
                      <Check size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">Thank You</h3>
                    <p className="text-gray-500 text-[16px] leading-relaxed max-w-md mx-auto mb-8">
                      Your enquiry has been received. A member of our team will be in touch shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 text-black text-[14px] font-semibold animated-underline"
                    >
                      Send Another Enquiry <ArrowRight size={14} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-2xl font-bold text-black tracking-tight mb-2">Send an Enquiry</h2>
                    <p className="text-gray-400 text-[14px] mb-8">Fill in the form below and our team will respond within 24 hours.</p>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[13px] font-medium text-gray-600 mb-2 block">Full Name *</label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleChange('fullName', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-300' : 'border-gray-200'} bg-[#fafafa] text-[14px] text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-colors`}
                          placeholder="Your full name"
                        />
                        {errors.fullName && <p className="text-red-500 text-[12px] mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="text-[13px] font-medium text-gray-600 mb-2 block">Company Name</label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => handleChange('companyName', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#fafafa] text-[14px] text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[13px] font-medium text-gray-600 mb-2 block">Email Address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-300' : 'border-gray-200'} bg-[#fafafa] text-[14px] text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-colors`}
                          placeholder="you@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="text-[13px] font-medium text-gray-600 mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#fafafa] text-[14px] text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-colors"
                          placeholder="+27 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[13px] font-medium text-gray-600 mb-2 block">Service Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#fafafa] text-[14px] text-black focus:outline-none focus:border-black focus:bg-white transition-colors appearance-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[13px] font-medium text-gray-600 mb-2 block">Message *</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-300' : 'border-gray-200'} bg-[#fafafa] text-[14px] text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-colors resize-none`}
                        placeholder="Tell us about your project or requirements..."
                      />
                      {errors.message && <p className="text-red-500 text-[12px] mt-1">{errors.message}</p>}
                    </div>

                    {errors.submit && <p className="text-red-500 text-[13px] mb-4">{errors.submit}</p>}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 bg-black text-white text-[14px] font-semibold rounded-full disabled:opacity-60"
                    >
                      {submitting ? (
                        <>Submitting <Loader2 size={16} className="animate-spin" /></>
                      ) : (
                        <>Send Enquiry <Send size={16} /></>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
