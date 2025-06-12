import BrandLogo from "../ui/logo/BrandLogo";
import NavLink from "./NavLink";
import MenuButton from "../ui/button/MenuButton";
import SearchBar from "../form/SearchBar";

export default function Header() {
  return (
    <header
      className="
        flex
        items-center
        justify-between
        gap-4
        p-2 lg:p-4
        overflow-x-scroll
      "
    >
      <div className="md:hidden basis-1/3">
        <MenuButton icon='Hamburger' />
      </div>
      <section
        className="
          flex
          basis-1/3
          items-center
          gap-2
          font-mono
        "
      >
        <BrandLogo compact />
        <nav className="hidden md:flex gap-2">
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/">LinkTwo</NavLink>
          <NavLink href="/">LinkThree</NavLink>
          <NavLink href="/">LinkFour</NavLink>
        </nav>
      </section>
      <div className="hidden md:flex basis-1/3">
        <SearchBar />
      </div>
      <div className="flex basis-1/3 justify-end">
        <MenuButton icon='ShoppingCart' />
      </div>
    </header>
  );
}
