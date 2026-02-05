import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services | JT Alunan Dental Clinic',
  description: 'Comprehensive dental services in Oton, Iloilo: general dentistry, braces, oral surgery, teeth whitening, and smile makeovers.',
};

const services = [
  {
    category: 'General Dentistry',
    icon: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop',
    description: 'Essential dental care for the whole family.',
    treatments: [
      {
        name: 'Regular Check-ups',
        details: 'Comprehensive oral examination, early detection of issues. Recommended every 6 months.'
      },
      {
        name: 'Dental Cleaning (Prophylaxis)',
        details: 'Remove plaque, tartar, and stains. Keep your teeth fresh and healthy.'
      },
      {
        name: 'Tooth Fillings',
        details: 'Restore cavities using quality materials. Painless and quick procedure.'
      },
      {
        name: 'Tooth Extraction',
        details: 'Safe removal of damaged or problematic teeth. Local anesthesia for comfort.'
      }
    ]
  },
  {
    category: 'Orthodontics',
    icon: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=800&fit=crop',
    description: 'Straighten your smile with braces and alignment treatments.',
    treatments: [
      {
        name: 'Metal Braces',
        details: 'Durable and effective. Perfect for all ages. Payment plans available.'
      },
      {
        name: 'Ceramic Braces',
        details: 'Less visible option with tooth-colored brackets. Great for adults.'
      },
      {
        name: 'Retainers',
        details: 'Maintain your new smile after braces treatment.'
      }
    ]
  },
  {
    category: 'Oral Surgery',
    icon: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=800&fit=crop',
    description: 'Safe surgical procedures with gentle care.',
    treatments: [
      {
        name: 'Wisdom Tooth Removal',
        details: 'Extraction of impacted or problematic wisdom teeth. Clear pre and post-op instructions.'
      },
      {
        name: 'Minor Oral Surgery',
        details: 'Treatment of cysts, infections, and other oral issues.'
      }
    ]
  },
  {
    category: 'Cosmetic Dentistry',
    icon: 'https://images.unsplash.com/photo-1606811971618-4486d9e8b4b2?w=800&h=800&fit=crop',
    description: 'Enhance your smile with aesthetic treatments.',
    treatments: [
      {
        name: 'Teeth Whitening',
        details: 'Professional bleaching for a brighter, whiter smile. Safe and effective.'
      },
      {
        name: 'Dental Veneers',
        details: 'Transform chipped, stained, or misaligned teeth with custom veneers.'
      },
      {
        name: 'Smile Makeovers',
        details: 'Comprehensive transformation combining multiple treatments. From shy smiles to smile goals.'
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-light to-white py-16 min-h-[50vh] flex items-center">
        <div className="section-container">
          <h1 className="text-center mb-6">Our Services</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care para sa buong pamilya — from simple cleaning to complete smile transformations.
          </p>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <section 
          key={index} 
          className={`${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-purple-light to-white'} min-h-screen flex items-center`}
        >
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image Section */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                      src={service.icon}
                      alt={service.category}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className="mb-4">{service.category}</h2>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>

                  <div className="space-y-4">
                    {service.treatments.map((treatment, tIndex) => (
                      <div 
                        key={tIndex}
                        className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
                      >
                        <h3 className="text-xl font-bold mb-3 text-gray-800">{treatment.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{treatment.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Note */}
      <section className="bg-gold-light min-h-[50vh] flex items-center">
        <div className="section-container text-center">
          <h2 className="mb-6">Transparent Pricing, No Hidden Fees</h2>
          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
            We believe in upfront pricing. During your consultation, we&apos;ll explain the treatment 
            options and costs clearly — walang surprises.
          </p>
          <p className="text-gray-700 mb-8">
            Payment plans available for orthodontics and major treatments. Just ask!
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
