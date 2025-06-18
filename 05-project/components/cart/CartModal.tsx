"use client";
import { useState } from "react";
import MenuButton from "../ui/button/MenuButton";

const visible = { menu: "translate-x-0",    backdrop: "opacity-70 pointer-events-auto" };
const  hidden = { menu: "translate-x-full", backdrop: "opacity-0 pointer-events-none"  };

export default function CartModal() {
  const [show, setShow] = useState(hidden);
  const  openMenu = () => setShow(visible);
  const closeMenu = () => setShow(hidden);

  return (
    <>
      <MenuButton icon="ShoppingCart" onClick={openMenu} />
      <div
        onClick={closeMenu}
        className={`
          hidden md:block
          fixed inset-0 z-90
          w-screen h-screen
          bg-black/70 cursor-pointer
          transition-opacity duration-500 ease-in-out
          ${show.backdrop}
        `}
      />
      <dialog
        open
        className={`
          fixed inset-0 left-auto right-0 z-100
          flex flex-col gap-3
          h-screen w-screen md:w-1/3
          p-2 lg:p-4
          bg-white/90 dark:bg-black/90
          transition-transform duration-500 ease-in-out
          ${show.menu}
        `}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-mono text-xl pl-6 md:pl-3">Your Cart</h2>
          <MenuButton icon="Cross" onClick={closeMenu} />
        </div>
      </dialog>
    </>
  );
}
