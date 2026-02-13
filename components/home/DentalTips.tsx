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
    icon: 'https://www.luxsmiledental.com/blog/wp-content/uploads/2021/08/AdobeStock_158469570__1623160676_77036.jpg',
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
    icon: 'https://img.freepik.com/free-photo/female-patient-flossing-her-teeth_107420-65468.jpg?semt=ais_user_personalization&w=740&q=80',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={tip.icon}
                  alt={tip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gold transition-colors">
                  {tip.title}
                </h3>
                <ul className="space-y-2">
                  {tip.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold mr-2 mt-1">●</span>
                      <span className="text-gray-600 text-sm">{point}</span>
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
