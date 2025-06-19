import PathLink from "../ui/button/PathLink";
import BrandLogo from "../ui/logo/BrandLogo";
import VercelLogo from "../ui/logo/VercelLogo";

const Hr = () => <hr className="border-t border-gray-300 shadow-sm" />;

const sectionStyles = `
  flex flex-col md:flex-row
  items-center
  gap-2 md:gap-12
  px-4 py-6
`;

export default function Footer() {
  return (
    <footer className="mt-2 text-center md:text-start overflow-x-auto">
      <Hr />
      <section className={`${sectionStyles} md:items-start text-sm`}>
        <BrandLogo />
        <nav className="flex flex-col gap-1 md:gap-4">
          <PathLink href="/">Home</PathLink>
          <PathLink href="/">About</PathLink>
          <PathLink href="/">Terms & Conditions</PathLink>
        </nav>
        <VercelLogo />
      </section>
      <Hr />
      <section className={`${sectionStyles} justify-between text-xs`}>
        <p>© 2025 Shopify Demo — Built for educational purposes. All rights reserved.</p>
        <PathLink href="/">View Source Code</PathLink>
        <p>Designed with Next 15, MongoDb & Tailwind 4.</p>
      </section>
    </footer>
  );
}
