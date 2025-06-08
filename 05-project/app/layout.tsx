import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Poiret_One } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
   subsets: ['latin'],
});

const poiret_one = Poiret_One({
  variable: '--font-poiret-one',
   subsets: ['latin'],
    weight: '400'
});

export const metadata: Metadata = {
        title: 'Shopify',
  description: 'Next JS project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${poiret_one.variable} antialiased`}>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
