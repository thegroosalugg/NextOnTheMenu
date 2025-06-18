import MobileMenu from "./MobileMenu";
import BrandLogo from "../ui/logo/BrandLogo";
import NavLink from "./NavLink";
import MenuButton from "../ui/button/MenuButton";
import SearchBar from "../form/SearchBar";
import Category from "@/model/category";

export default async function Header() {
  const links = await Category.getLinks();

  return (
    <header
      className="
        flex gap-4
        items-center justify-between
        p-2 lg:p-4
        overflow-x-scroll
      "
    >
      <div className="md:hidden basis-1/3">
        <MobileMenu {...{ links }} />
      </div>
      <section
        className="
          flex basis-1/3 gap-2
          items-center
          font-mono
        "
      >
        <BrandLogo compact />
        <nav className="hidden md:flex gap-2 capitalize">
          <NavLink href="/shop">All</NavLink>
          {links.map(({ _id, path, name }) => (
            <NavLink key={_id} href={`/shop/${path}`}>
              {name}
            </NavLink>
          ))}
        </nav>
      </section>
      <div className="hidden md:flex basis-1/3">
        <SearchBar />
      </div>
      <div className="flex basis-1/3 justify-end">
        <MenuButton icon="ShoppingCart" />
      </div>
    </header>
  );
}
