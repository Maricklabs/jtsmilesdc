import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    icon: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop',
    title: 'General Dentistry',
    description: 'Simple cleaning to remove plaque and tartar — para fresh at malinis ang ngiti mo. Check-ups, fillings, and extractions.',
  },
  {
    icon: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=600&fit=crop',
    title: 'Braces & Orthodontics',
    description: 'Metal braces, ceramic braces para sa straighter, more confident smile. Payment plans available.',
  },
  {
    icon: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&h=600&fit=crop',
    title: 'Oral Surgery',
    description: 'Wisdom tooth removal, minor surgery. Maalagang approach with clear explanations bago ang procedure.',
  },
  {
    icon: 'https://images.unsplash.com/photo-1606811971618-4486d9e8b4b2?w=600&h=600&fit=crop',
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
              className="bg-gradient-to-br from-white to-purple-light border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="relative h-48 sm:h-full">
                  <Image 
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
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
