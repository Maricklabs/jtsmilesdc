# JT Alunan Dental Clinic Website

A modern, responsive Next.js website for JT Alunan Dental Clinic in Oton, Iloilo. Built with education and patient care in mind.

## Features

- ✨ **Modern Design**: Clean white-gold-purple color scheme
- 📱 **Fully Responsive**: Mobile-first design for all devices
- 🌏 **Bilingual Content**: English + Filipino/Tagalog for down-to-earth feel
- 📚 **Educational Focus**: Dental health tips and information
- 💬 **Easy Contact**: Floating Facebook Messenger button
- 🎯 **Simple Navigation**: 5 clear pages (Home, About, Services, Dental Tips, Contact)
- ⚡ **Fast Performance**: Built with Next.js 14 and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Roboto & Open Sans (via Google Fonts)

## Project Structure

```
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact page with form
│   ├── dental-tips/        # Educational content
│   ├── services/           # Services listing
│   ├── layout.tsx          # Root layout with nav & footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── home/               # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── DentalTips.tsx
│   │   ├── Services.tsx
│   │   ├── DoctorIntro.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactSection.tsx
│   ├── Navigation.tsx      # Main navigation
│   ├── Footer.tsx          # Footer component
│   └── MessengerButton.tsx # Floating Messenger button
└── Reference Files/        # Design assets and references
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Color Palette

- **White**: `#FFFFFF` - Primary background
- **Gold**: `#D4AF37` - CTAs and accents
- **Light Purple**: `#E6D9F2` - Section backgrounds
- **Gray**: Various shades for text

## Key Pages

- **Home** (`/`): Hero, dental tips preview, services, doctor intro, testimonials, contact form
- **About** (`/about`): Clinic story, values, team, why choose us
- **Services** (`/services`): Comprehensive service listings with details
- **Dental Tips** (`/dental-tips`): Educational content about oral health
- **Contact** (`/contact`): Full contact information and appointment request form

## Design Principles

Following modern UX best practices:
- ✅ "Boring" navigation (clear, conventional placement)
- ✅ Scanner-friendly content (bullets, whitespace, simple fonts)
- ✅ Mobile-first responsive design
- ✅ Authentic tone (Filipino/English mix, real person behind the screen)
- ✅ Published over perfect (iterative improvements)

## Customization

### Update Contact Information

Edit the following files:
- `components/Footer.tsx`
- `components/home/ContactSection.tsx`
- `app/contact/page.tsx`

### Update Clinic Hours

Edit `components/Footer.tsx` and `app/contact/page.tsx`

### Replace Placeholder Images

Add real photos to `/public/images/` and update image sources in:
- `components/home/Hero.tsx`
- `components/home/DoctorIntro.tsx`
- `app/about/page.tsx`

### Update Facebook Messenger Link

Edit `components/MessengerButton.tsx` with the correct Messenger chat URL.

## Future Enhancements

- [ ] Add real appointment booking system integration
- [ ] Implement blog/news section
- [ ] Add before/after gallery
- [ ] Integrate with Google Maps embed
- [ ] Add patient portal for existing patients
- [ ] SEO optimization with meta tags
- [ ] Google Analytics integration

## License

© 2026 JT Alunan Dental Clinic. All rights reserved.
