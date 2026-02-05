import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MessengerButton from "@/components/MessengerButton";

export const metadata: Metadata = {
  title: "JT Alunan Dental Clinic | Gentle Dental Care in Oton, Iloilo",
  description: "Gentle dental alaga para sa ngiti mo. General dentistry, braces, oral surgery, and smile makeovers in Oton, Iloilo. Newly opened clinic focused on education and tiwala.",
  keywords: "dental clinic, dentist Oton, dentist Iloilo, braces, teeth cleaning, dental care, orthodontics",
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
