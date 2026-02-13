import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white to-purple-light min-h-screen flex items-center relative overflow-hidden">
      {/* Doctor Image - Right 1/3 - Hidden on mobile */}
      <div className="absolute right-[120px] top-0 bottom-0 w-1/2 lg:w-1/3 hidden md:block">
        <Image 
          src="/images/doctor_profile_hero.png" 
          alt="JT Alunan Dental Clinic - Your Smile, Our Priority"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="relative z-10 px-6 sm:px-12 lg:pl-24 pr-4 py-12 max-w-7xl w-full">
        <div className="md:w-full lg:w-3/5">
          {/* Text Content */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight font-bold">
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
      </div>
    </section>
  );
}
