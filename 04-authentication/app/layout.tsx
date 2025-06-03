import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Tinos } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
   subsets: ['latin'],
});

const tinos = Tinos({
  variable: '--font-tinos',
   subsets: ['latin'],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
        title: 'Cache',
  description: 'Optimising Next Apps',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${tinos.variable}`}>
        <Header />
        <main id='main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
