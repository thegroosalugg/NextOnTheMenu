import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Gluten } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
   subsets: ['latin'],
});

const gluten = Gluten({
  variable: '--font-gluten',
   subsets: ['latin'],
});

export const metadata: Metadata = {
        title: 'FoodHouse',
  description: 'The House for Food',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${gluten.variable}`}>
        <Header />
        <main id='main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
