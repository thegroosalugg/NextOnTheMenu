import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Poiret_One } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import "@/lib/mongo/initProducts"; // create dummy data if non existent
import "@/lib/mongo/initCategories";
import { loadCart } from '@/lib/actions/cart';
import { CartProvider } from '@/components/cart/CartContext';

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
        title: 'Shopify | Home',
  description: 'Next JS project',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await loadCart();
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${poiret_one.variable} antialiased`}>
        <CartProvider {...{ cart }}>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
