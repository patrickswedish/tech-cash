import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TechCash Eindhoven | Direct Cash voor MacBooks, iPhones, GPUs & Consoles',
  description: 'Verkoop je gebruikte MacBook, iPhone, NVIDIA videokaart of PlayStation direct voor cash in Eindhoven. Bereken je prijs in 10 seconden online!',
  keywords: ['tech verkopen eindhoven', 'macbook inleveren cash', 'iphone verkopen eindhoven', 'rtx gpu inruilen', 'ps5 verkopen eindhoven'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}