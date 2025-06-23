"use client";
import { useState } from "react";
import Category from "@/model/category";
import IconButton from "../ui/button/IconButton";
import NavGroup from "./NavGroup";
import SearchBar from "./SearchBar";

export default function MobileMenu({ links }: { links: Category[] }) {
  const [showMenu, setShowMenu] = useState("-translate-x-full");
  const  openMenu = () => setShowMenu("translate-0");
  const closeMenu = () => setShowMenu("-translate-x-full");

  return (
    <>
      <IconButton icon="Hamburger" onClick={openMenu} />
      <dialog
        open
        className={`
          fixed inset-0 z-100
          flex flex-col gap-3
          w-screen h-screen
          p-4 lg:p-6
          bg-white/90 dark:bg-black/90
          transition-transform duration-500 ease-in-out
          ${showMenu}
        `}
      >
        <IconButton icon="Cross" onClick={closeMenu} />
        <SearchBar />
        <NavGroup {...{ links, onClick: closeMenu, col: true }} />
      </dialog>
    </>
  );
}
