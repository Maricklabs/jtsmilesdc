import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MessengerButton from "@/components/MessengerButton";

export const metadata: Metadata = {
  title: "JTSmiles DC | Gentle Dental Care in Oton, Iloilo",
  description: "Gentle dental alaga para sa ngiti mo. General dentistry, braces, oral surgery, and smile makeovers in Oton, Iloilo. Newly opened clinic focused on education and tiwala.",
  keywords: "dental clinic, dentist Oton, dentist Iloilo, braces, teeth cleaning, dental care, orthodontics",
  icons: {
    icon: '/images/Logo_wbg.png',
    apple: '/images/Logo_wbg.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MessengerButton />
      </body>
    </html>
  );
}
