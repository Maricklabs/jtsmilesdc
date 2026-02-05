import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white to-purple-light min-h-screen flex items-center">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="mb-6 leading-tight">
              Kumusta ang <span className="text-gold">ngiti</span> mo?
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              Gentle dental care, <span className="font-semibold">alaga</span> para sa ngiti mo.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Newly opened clinic sa Oton, Iloilo. Simple, honest dental care at mabilis na tips para sa buong pamilya.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Request an Appointment
              </Link>
              <Link href="#services" className="btn-outline text-center">
                See our services
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Walang commitment, we&apos;ll just get in touch to schedule.
            </p>
          </div>

          {/* Right: Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl shadow-2xl overflow-hidden relative w-full h-auto">
              <Image 
                src="/images/adposter_1.jpg" 
                alt="JT Alunan Dental Clinic - Your Smile, Our Priority"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
