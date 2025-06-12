import Link from "next/link";
import Svg from "../icon/Svg";

export default function BrandLogo({ compact }: { compact?: boolean }) {
  let styles = "-ml-0.25 text-accent text-xl uppercase";
  if (compact) styles += " md:hidden lg:inline";
  return (
    <Link href="/" className="flex items-center font-sans [&>svg]:mb-1">
      <Svg icon="ShoppingBag" size={28} />
      <span className={styles}>Shopify</span>
    </Link>
  );
}
