import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | JTSmiles DC',
  description: 'Learn about Dr. JT Alunan and our newly opened dental clinic in Oton, Iloilo. Gentle care, education-focused, and community-oriented.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-light to-white py-16 min-h-[50vh] flex items-center">
        <div className="section-container">
          <h1 className="text-center mb-6">About JT Alunan Dental Clinic</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            A newly opened dental clinic sa Oton, Iloilo — bringing gentle, honest, and education-focused care to our community.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white min-h-screen flex items-center">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  JT Alunan Dental Clinic was founded with a simple mission: to provide accessible, 
                  high-quality dental care to the people of Oton and surrounding communities.
                </p>
                <p>
                  As a newly opened clinic, we understand na building <span className="font-semibold text-gold">tiwala</span> takes 
                  time. That&apos;s why we focus on clear communication, patient education, and gentle care 
                  for every person who walks through our door.
                </p>
                <p>
                  Hindi lang kami nag-treat ng teeth — we want to empower you with knowledge about 
                  your dental health so you can make informed decisions.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gold-light to-purple-light rounded-2xl p-12 text-center">
              <div className="mb-4 relative w-24 h-24 mx-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop"
                  alt="Our Values"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Values</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span><strong>Alaga:</strong> Gentle, patient-centered care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span><strong>Tiwala:</strong> Building trust through transparency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span><strong>Education:</strong> Clear explanations, no jargon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span><strong>Community:</strong> Serving Oton with pride</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gradient-to-br from-white to-purple-light min-h-screen flex items-center">
        <div className="section-container">
          <h2 className="text-center mb-12">Meet Our Team</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="overflow-hidden max-w-md mx-auto">
                  <Image 
                    src="/images/doctor_profile_2.jpg" 
                    alt="Dr. JT Alunan - General Dentist"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Dr. JT Alunan</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Passionate about preventive care and patient education. Dr. JT believes that 
                    understanding your dental health is the first step to a healthier smile.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gold">Philosophy</h4>
                      <p className="text-gray-600">
                        "Every patient deserves to understand their treatment. Walang pressure, 
                        walang hidden agenda — just honest care."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold">Specialties</h4>
                      <p className="text-gray-600">
                        General Dentistry, Orthodontics, Oral Surgery, Cosmetic Dentistry
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white min-h-screen flex items-center">
        <div className="section-container">
          <h2 className="text-center mb-12">Why Choose JT Alunan Dental Clinic?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 relative w-20 h-20 mx-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=400&fit=crop"
                  alt="Local & Trusted"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Local & Trusted</h3>
              <p className="text-gray-600">
                Proud to serve the Oton community with personalized care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative w-20 h-20 mx-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop"
                  alt="Transparent Pricing"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                Klaro sa presyo. Payment plans available for major treatments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative w-20 h-20 mx-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=400&h=400&fit=crop"
                  alt="Education First"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Education First</h3>
              <p className="text-gray-600">
                We explain every step so you&apos;re comfortable and informed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative w-20 h-20 mx-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=400&fit=crop"
                  alt="Flexible Hours"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Hours</h3>
              <p className="text-gray-600">
                Monday-Saturday, with Sunday appointments available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
