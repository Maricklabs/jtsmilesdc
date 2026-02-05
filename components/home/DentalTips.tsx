import Link from 'next/link';
import Image from 'next/image';

const tips = [
  {
    icon: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop',
    title: 'Brush 2x a Day',
    points: [
      'Gamit ng soft-bristled toothbrush',
      '2 minutes lang, focus sa gilid ng gums',
      'Morning at before bedtime'
    ]
  },
  {
    icon: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop',
    title: 'Check-ups Every 6 Months',
    points: [
      'Regular cleaning para tanggalin ang plaque',
      'Early detection ng cavities',
      'Okay lang if matagal na — start tayo ulit ngayon'
    ]
  },
  {
    icon: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop',
    title: 'Healthy Diet, Healthy Teeth',
    points: [
      'Limit sugary snacks at soft drinks',
      'Kumain ng crunchy fruits and veggies',
      'Drink water after meals'
    ]
  },
  {
    icon: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop',
    title: 'Floss Daily',
    points: [
      'Removes food stuck between teeth',
      'Prevents gum disease',
      'Once a day lang, preferably before bed'
    ]
  }
];

export default function DentalTips() {
  return (
    <section className="bg-purple-light min-h-screen flex items-center">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Dental Health 101: Mabilis na Tips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Short, practical advice para alagaan ang ngiti mo araw-araw.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative h-48">
                <Image 
                  src={tip.icon}
                  alt={tip.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {tip.title}
                </h3>
                <ul className="space-y-2">
                  {tip.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/dental-tips" className="btn-primary inline-block">
            View More Dental Tips
          </Link>
        </div>
      </div>
    </section>
  );
}
