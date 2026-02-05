import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">JT Alunan Dental Clinic</h3>
            <p className="text-gray-300 mb-4">
              Gentle dental alaga para sa ngiti mo.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 2nd Floor, Door 4, St. Joseph Building</p>
              <p className="ml-4">Brgy. San Antonio, Oton, Iloilo</p>
              <p>📞 <a href="tel:09196152434" className="hover:text-gold">0919 615 2434</a></p>
              <p>✉️ <a href="mailto:jtsmilesdc@gmail.com" className="hover:text-gold">jtsmilesdc@gmail.com</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/dental-tips" className="text-gray-300 hover:text-gold transition-colors">Dental Tips</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Clinic Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Saturday</p>
              <p className="font-semibold">9:00 AM - 6:00 PM</p>
              <p className="mt-4">Sunday: By Appointment Only</p>
              <div className="mt-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61584932546132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-300 hover:text-gold transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Follow us on Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JT Alunan Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
