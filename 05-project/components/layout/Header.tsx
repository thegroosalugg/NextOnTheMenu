import { getLinks } from "@/lib/actions/category";
import MobileMenu from "./MobileMenu";
import BrandLogo from "../ui/logo/BrandLogo";
import NavGroup from "./NavGroup";
import SearchBar from "./SearchBar";
import CartModal from "../cart/CartModal";

export default async function Header() {
  const links = await getLinks();

  return (
    <header
      className="
        flex gap-4
        items-center justify-between
        p-4 lg:p-6
        overflow-x-scroll
      "
    >
      <div className="md:hidden basis-1/3">
        <MobileMenu {...{ links }} />
      </div>
      <section className="flex basis-1/3 gap-2 items-center font-mono">
        <BrandLogo compact />
        <NavGroup {...{ links, hover: "hover:text-shadow-lg" }} />
      </section>
      <div className="hidden md:flex basis-1/3">
        <SearchBar />
      </div>
      <div className="flex basis-1/3 justify-end">
        <CartModal />
      </div>
    </header>
  );
}
