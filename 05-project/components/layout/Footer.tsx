import PathLink from "../ui/button/PathLink";
import Hr from "../ui/layout/Hr";
import BrandLogo from "../ui/logo/BrandLogo";
import VercelLogo from "../ui/logo/VercelLogo";

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
          <PathLink href="/about">About</PathLink>
          <PathLink href="/terms-conditions">Terms & Conditions</PathLink>
          <PathLink href="/privacy">Privacy Policy</PathLink>
        </nav>
        <VercelLogo />
      </section>
      <Hr />
      <section className={`${sectionStyles} justify-between text-xs`}>
        <p>© 2025 Shopify Demo — Built for educational purposes. All rights reserved.</p>
        <a
          href="https://github.com/thegroosalugg/NextOnTheMenu/tree/main/05-project"
          target="_blank"
          className="block text-center hover:text-sky-500 transition-all duration-500 ease-in-out"
        >
          View Source Code
        </a>
        <p>Designed with Next 15, MongoDb & Tailwind 4.</p>
      </section>
    </footer>
  );
}
