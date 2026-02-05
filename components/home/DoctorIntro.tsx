import Link from 'next/link';
import Image from 'next/image';

export default function DoctorIntro() {
  return (
    <section className="bg-gradient-to-br from-purple-light to-white min-h-screen flex items-center">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Doctor Photo */}
          <div>
            <div className="rounded-2xl shadow-2xl overflow-hidden relative w-full h-auto">
              <Image 
                src="/images/doctor_profile_1.jpg" 
                alt="Dr. JT Alunan - Your Trusted Dentist"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Doctor Info */}
          <div>
            <h2 className="mb-6">Meet Dr. JT Alunan</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mahilig magpaliwanag at gusto naming naiintindihan mo bawat step ng treatment. 
              We believe na building <span className="font-semibold text-gold">tiwala</span> is just as important as building healthy smiles.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-gold text-2xl mr-3">✓</span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Gentle, Patient-Centered Care</h3>
                  <p className="text-gray-600">Maalagang approach para sa lahat — from kids to adults.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-gold text-2xl mr-3">✓</span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Education-Focused</h3>
                  <p className="text-gray-600">We take time to explain procedures and answer your questions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-gold text-2xl mr-3">✓</span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Serving Oton Community</h3>
                  <p className="text-gray-600">Newly opened clinic focused on bringing quality dental care to San Antonio and surrounding areas.</p>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-gold pl-6 italic text-xl text-gray-700">
              &ldquo;I want every patient in Oton to feel confident and comfortable with their smile.&rdquo;
            </blockquote>

            <div className="mt-8">
              <Link href="/about" className="btn-outline inline-block">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
