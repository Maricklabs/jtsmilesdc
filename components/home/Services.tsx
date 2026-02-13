import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    icon: '/images/adofferings_2.jpg',
    title: 'General Dentistry',
    description: 'Simple cleaning to remove plaque and tartar — para fresh at malinis ang ngiti mo. Check-ups, fillings, and extractions.',
  },
  {
    icon: '/images/adofferings_1.jpg',
    title: 'Braces & Orthodontics',
    description: 'Metal braces, ceramic braces para sa straighter, more confident smile. Payment plans available.',
  },
  {
    icon: '/images/adofferings_3.jpg',
    title: 'Oral Surgery',
    description: 'Wisdom tooth removal, minor surgery. Maalagang approach with clear explanations bago ang procedure.',
  },
  {
    icon: '/images/adofferings_4.jpg',
    title: 'Smile Makeovers',
    description: 'Teeth whitening, veneers, bonding. From shy smiles to smile goals — transformation na natural at beautiful.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white min-h-screen flex items-center">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Services for Your Everyday Ngiti</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care sa isang clinic — from cleaning to braces to smile transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <Link href="/services" className="inline-flex items-center text-gold font-semibold hover:text-gold-dark transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-primary inline-block">
            See All Services & Pricing
          </Link>
          <p className="text-gray-600 mt-4">
            Klaro sa presyo, no hidden fees. Explain muna namin lahat bago ang treatment.
          </p>
        </div>
      </div>
    </section>
  );
}
