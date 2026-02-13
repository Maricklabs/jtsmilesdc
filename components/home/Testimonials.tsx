import Image from 'next/image';

const testimonials = [
  {
    name: 'Maria L.',
    text: 'Kinabahan ako sa una, pero kalmado si Doc at mahinahon magpaliwanag. Mas kampante na ako ngayon sa check-ups.',
    service: 'General Check-up'
  },
  {
    name: 'Carlos R.',
    text: 'Napakaganda ng clinic at ang bait ng staff. Walang pain during cleaning, at klaro yung explanation about my dental health.',
    service: 'Dental Cleaning'
  },
  {
    name: 'Jenny M.',
    text: 'Finally decided to get braces! Payment plan helped a lot. Excited na ako for my new smile! Salamat Doc JT!',
    service: 'Orthodontics'
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Real Smiles, Real Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our patients — mga tunay na kwento from people sa Oton community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-gold text-5xl mb-4 opacity-50">&ldquo;</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900 group-hover:text-gold transition-colors">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-purple-light to-gold-light rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">From Shy Smiles to Smile Goals 🌟</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/adtestimonial_1.jpg" 
                alt="Patient smile transformation testimonial"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/adtestimonial_2.jpg" 
                alt="Patient smile transformation testimonial"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Join hundreds of satisfied patients who trusted us with their dental care.
          </p>
          <p className="text-sm text-gray-600">
            Message us on Facebook to see more transformations!
          </p>
        </div>
      </div>
    </section>
  );
}
