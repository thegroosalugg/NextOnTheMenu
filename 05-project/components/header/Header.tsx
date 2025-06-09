import Link from "next/link";
import NavLink from "./NavLink";
import SearchBar from "../form/SearchBar";
import Svg from "../ui/icon/Svg";

const btnClasses = `
  flex
  items-center
  bg-stone-100 dark:bg-stone-700
  border border-accent rounded-sm
  p-1
`

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
        <button className={btnClasses}>
          <Svg icon="Hamburger" size={20} />
        </button>
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
        <Link href="/" className="mx-auto md:mx-0 flex items-center font-sans">
          <Svg icon="ShoppingBag" size={20} />
          <span className="md:hidden lg:block -ml-0.25 text-accent uppercase">Shopify</span>
        </Link>
        <nav className="hidden md:flex gap-2">
          <NavLink href="/">LinkOne</NavLink>
          <NavLink href="/">LinkTwo</NavLink>
          <NavLink href="/">LinkThree</NavLink>
          <NavLink href="/">LinkFour</NavLink>
        </nav>
      </section>
      <div className="hidden md:flex basis-1/3">
        <SearchBar />
      </div>
      <div className="flex basis-1/3 justify-end">
        <button className={btnClasses}>
          <Svg icon="ShoppingCart" size={20} />
        </button>
      </div>
    </header>
  );
}
