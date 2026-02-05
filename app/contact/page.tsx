'use client';

import type { Metadata } from 'next';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    preferredDate: '',
    concernType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitMessage('Salamat! We\'ll contact you soon to confirm your appointment.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        preferredDate: '',
        concernType: '',
        message: ''
      });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-light to-white py-16 min-h-[50vh] flex items-center">
        <div className="section-container">
          <h1 className="text-center mb-6">Contact Us</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Ready to take care of your ngiti? Reach out to us — we&apos;re here to help!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white min-h-screen flex items-center">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gold rounded-full p-4 mr-4">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-gray-600 mb-1">2nd Floor, Door 4</p>
                    <p className="text-gray-600 mb-1">St. Joseph Building</p>
                    <p className="text-gray-600 mb-3">Brgy. San Antonio, Oton, Iloilo</p>
                    <a 
                      href="https://maps.google.com/?q=St.+Joseph+Building+Oton+Iloilo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-dark underline font-semibold inline-flex items-center"
                    >
                      View on Google Maps
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold rounded-full p-4 mr-4">
                    <span className="text-3xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <a 
                      href="tel:09196152434" 
                      className="text-2xl text-gold hover:text-gold-dark font-semibold"
                    >
                      0919 615 2434
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Tap to call on mobile</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold rounded-full p-4 mr-4">
                    <span className="text-3xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a 
                      href="mailto:jtsmilesdc@gmail.com" 
                      className="text-lg text-gold hover:text-gold-dark"
                    >
                      jtsmilesdc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold rounded-full p-4 mr-4">
                    <span className="text-3xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Clinic Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between max-w-xs">
                        <span className="font-semibold text-gray-700">Monday - Saturday:</span>
                        <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between max-w-xs">
                        <span className="font-semibold text-gray-700">Sunday:</span>
                        <span className="text-gray-600">By Appointment</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-4 mr-4">
                    <span className="text-3xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Facebook</h3>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61584932546132"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-dark font-semibold inline-flex items-center"
                    >
                      Visit our Facebook page
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Message us for quick responses!</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gold-light rounded-xl p-6">
                <p className="text-gray-700">
                  <strong className="text-gold-dark">Emergency?</strong> Call us directly. 
                  For regular appointments, use the form or message us on Facebook.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-purple-light to-white rounded-2xl shadow-xl p-8">
                <h2 className="mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>

                {submitMessage && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-semibold mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                        placeholder="0919 123 4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                        placeholder="optional"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold mb-2">
                      Preferred Date/Time
                    </label>
                    <input
                      type="text"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                      placeholder="e.g., March 15, morning"
                    />
                  </div>

                  <div>
                    <label htmlFor="concernType" className="block text-sm font-semibold mb-2">
                      Type of Concern *
                    </label>
                    <select
                      id="concernType"
                      name="concernType"
                      required
                      value={formData.concernType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                    >
                      <option value="">Select a concern...</option>
                      <option value="checkup">General Check-up</option>
                      <option value="cleaning">Dental Cleaning</option>
                      <option value="toothache">Toothache/Pain</option>
                      <option value="braces">Braces/Orthodontics</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="extraction">Tooth Extraction</option>
                      <option value="emergency">Emergency</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none bg-white"
                      placeholder="Tell us more about your concern..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    Your information is safe with us. We reply during clinic hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
