import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dental Health Tips | JT Alunan Dental Clinic',
  description: 'Free dental health tips and educational content from JT Alunan Dental Clinic. Learn how to take care of your teeth and gums.',
};

const tips = [
  {
    title: 'Proper Brushing Technique',
    icon: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop',
    content: [
      'Use a soft-bristled toothbrush — mas gentle sa gums',
      'Brush for 2 minutes, twice a day (morning and before bed)',
      'Angle your brush at 45 degrees towards the gum line',
      'Use gentle circular motions, hindi scrubbing',
      'Don\'t forget your tongue — maraming bacteria doon!',
      'Replace your toothbrush every 3-4 months'
    ]
  },
  {
    title: 'Why Flossing Matters',
    icon: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop',
    content: [
      'Toothbrush can only clean 60% of your tooth surface',
      'Floss removes food particles stuck between teeth',
      'Prevents gum disease and bad breath',
      'Do it once a day, preferably before bedtime',
      'Gentle motion — wag masyadong aggressive sa gums',
      'If bleeding occurs at first, it should stop after regular flossing'
    ]
  },
  {
    title: 'Foods for Healthy Teeth',
    icon: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop',
    content: [
      'Crunchy fruits and vegetables (apples, carrots) — natural cleaners',
      'Dairy products (milk, cheese) — rich in calcium',
      'Water — washes away food particles and bacteria',
      'Limit sugary snacks and soft drinks',
      'Avoid sticky candies na matagal sa teeth',
      'If you eat sweets, rinse with water after'
    ]
  },
  {
    title: 'Understanding Cavities',
    icon: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop',
    content: [
      'Caused by bacteria that produce acid from sugar',
      'Early signs: white spots, sensitivity to sweet/cold',
      'Can be painless sa simula — kaya important ang check-ups',
      'Prevention: good oral hygiene + less sugar',
      'Once formed, cavities need professional filling',
      'Don\'t ignore tooth pain — mas malaki ang gastos if delayed'
    ]
  },
  {
    title: 'Gum Health Basics',
    icon: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=400&fit=crop',
    content: [
      'Healthy gums = pink, firm, and don\'t bleed easily',
      'Warning signs: redness, swelling, bleeding when brushing',
      'Gum disease is often painless — regular check-ups catch it early',
      'Caused by plaque buildup along the gum line',
      'Prevention: brush, floss, and professional cleanings',
      'Advanced gum disease can lead to tooth loss'
    ]
  },
  {
    title: 'When to See a Dentist',
    icon: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop',
    content: [
      'Every 6 months for check-ups and cleaning',
      'If you have persistent tooth or jaw pain',
      'Bleeding or swollen gums',
      'Sensitivity to hot or cold that lasts',
      'Loose or shifting teeth',
      'Don\'t wait for pain — prevention is cheaper than treatment!'
    ]
  },
  {
    title: 'Caring for Braces',
    icon: 'https://images.unsplash.com/photo-1609554496796-c345a5335ceb?w=400&h=400&fit=crop',
    content: [
      'Brush after every meal — food gets stuck easily',
      'Use a special orthodontic toothbrush or electric brush',
      'Floss daily with floss threaders',
      'Avoid hard, sticky, or chewy foods',
      'Attend all adjustment appointments',
      'Wear rubber bands as instructed — para mabilis ang results'
    ]
  },
  {
    title: 'Children\'s Dental Care',
    icon: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop',
    content: [
      'Start cleaning gums even before teeth appear',
      'First dental visit by age 1 or when first tooth erupts',
      'Supervise brushing until age 7-8',
      'Limit juice and sugary snacks',
      'Make brushing fun — sing songs, use colorful brushes',
      'Lead by example — kids copy what they see!'
    ]
  },
  {
    title: 'Dealing with Tooth Sensitivity',
    icon: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop',
    content: [
      'Common causes: worn enamel, exposed roots, cavities',
      'Use toothpaste designed for sensitive teeth',
      'Avoid very hot or cold foods temporarily',
      'Don\'t brush too hard — gentle lang',
      'See a dentist if it persists — may underlying issue',
      'Treatment options available depending on the cause'
    ]
  }
];

export default function DentalTipsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-light to-white py-16 min-h-[50vh] flex items-center">
        <div className="section-container">
          <h1 className="text-center mb-6">Dental Health Tips</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Educational content para maintindihan mo kung paano alagaan ang iyong ngipin at gums. 
            Knowledge is power when it comes to oral health!
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="bg-white min-h-screen flex items-center">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-purple-light border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-200"
              >
                <div className="relative h-64">
                  <Image 
                    src={tip.icon}
                    alt={tip.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{tip.title}</h3>
                  <ul className="space-y-2">
                    {tip.content.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start">
                        <span className="text-gold mr-2 flex-shrink-0">•</span>
                        <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gold-light to-purple-light min-h-[50vh] flex items-center">
        <div className="section-container text-center">
          <h2 className="mb-6">Have Questions About Your Dental Health?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Don&apos;t hesitate to ask! We&apos;re here to educate and help you make informed decisions 
            about your oral health. Walang tanong na masyadong simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Ask Us Anything
            </Link>
            <a 
              href="https://www.facebook.com/profile.php?id=61584932546132"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Message on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
