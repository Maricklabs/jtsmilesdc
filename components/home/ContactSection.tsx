'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
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
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Salamat! We\'ll contact you soon to confirm your appointment.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        mobile: '',
        preferredDate: '',
        concernType: '',
        message: ''
      });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-br from-purple-light to-white min-h-screen flex items-center">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Kumusta ang Ngiti Mo? Tara, Usap Tayo.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take care of your smile? Send us a message or call us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Visit Our Clinic</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <span className="text-3xl mr-4">📍</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-gray-600">2nd Floor, Door 4, St. Joseph Building</p>
                  <p className="text-gray-600">Brgy. San Antonio, Oton, Iloilo</p>
                  <a 
                    href="https://maps.google.com/?q=St.+Joseph+Building+Oton+Iloilo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-dark underline mt-1 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">📞</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <a href="tel:09196152434" className="text-gold hover:text-gold-dark text-xl">
                    0919 615 2434
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Tap to call on mobile</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">✉️</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <a href="mailto:jtsmilesdc@gmail.com" className="text-gold hover:text-gold-dark">
                    jtsmilesdc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">🕒</span>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Clinic Hours</h4>
                  <div className="space-y-1 text-gray-600">
                    <p><span className="font-medium">Monday - Saturday:</span> 9:00 AM - 6:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold-light rounded-lg p-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> We reply during clinic hours. For dental emergencies, please call us directly.
              </p>
            </div>
          </div>

          {/* Appointment Request Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Request an Appointment</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below. We&apos;ll text or message you to confirm the schedule.
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Juan Dela Cruz"
                  />
                </div>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="0919 123 4567"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="">Select a concern...</option>
                    <option value="checkup">General Check-up</option>
                    <option value="cleaning">Dental Cleaning</option>
                    <option value="toothache">Toothache/Pain</option>
                    <option value="braces">Braces/Orthodontics</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="extraction">Tooth Extraction</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    placeholder="Any additional details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Appointment Request'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Walang automatic booking, tao pa rin ang kausap mo. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
