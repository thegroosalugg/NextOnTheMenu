"use client";
import { useState } from "react";
import MenuButton from "../ui/button/MenuButton";
import Category from "@/model/category";
import NavLink from "./NavLink";
import SearchBar from "../form/SearchBar";

export default function MobileMenu({ links }: { links: Category[] }) {
  const [showMenu, setShowMenu] = useState("-translate-x-full");
  const  openMenu = () => setShowMenu("translate-0");
  const closeMenu = () => setShowMenu("-translate-x-full");

  return (
    <>
      <MenuButton icon="Hamburger" onClick={openMenu} />
      <dialog
        open
        className={`
          fixed inset-0 z-100
          flex flex-col gap-3
          w-screen h-screen
          p-2 lg:p-4
          bg-white/90 dark:bg-black/90
          transition-transform duration-500 ease-in-out
          ${showMenu}
        `}
      >
        <MenuButton icon="Cross" onClick={closeMenu} />
        <SearchBar />
        <nav className="flex flex-col gap-2 capitalize overflow-y-scroll">
          <NavLink href="/shop" onClick={closeMenu}>All</NavLink>
          {links.map(({ _id, path, name }) => (
            <NavLink key={_id} href={`/shop/${path}`} onClick={closeMenu}>
              {name}
            </NavLink>
          ))}
        </nav>
      </dialog>
    </>
  );
}
