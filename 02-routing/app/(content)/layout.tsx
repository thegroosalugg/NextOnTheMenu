import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

// (routeGroups) allow separate route layouts - they do not add URL segments
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main id='main'>{children}</main>
      <Footer />
    </>
  );
}
