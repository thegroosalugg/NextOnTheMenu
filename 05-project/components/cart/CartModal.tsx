"use client";
import IconButton from "../ui/button/IconButton";
import { useCart } from "./CartContext";
import CartBody from "./CartBody";
import CartOpenButton from "./CartOpenButton";

export default function CartModal() {
  const { cart, ui, openMenu, closeMenu, getTotal } = useCart();
  const total = getTotal("price").toFixed(2);
  const totalQty = getTotal("quantity");

  return (
    <>
      <CartOpenButton total={totalQty} onClick={openMenu} />
      <div
        onClick={closeMenu}
        className={`
          hidden md:block
          fixed inset-0 z-90
          w-screen h-screen
          bg-black/70 cursor-pointer
          transition-opacity duration-500 ease-in-out
          ${ui.backdrop}
        `}
      />
      <dialog
        open
        className={`
          fixed inset-0 left-auto right-0 z-100
          flex flex-col gap-1
          h-screen w-screen md:w-2/5
          overflow-y-scroll
          p-2 lg:p-4
          bg-white/92 dark:bg-black/92
          transition-transform duration-500 ease-in-out
          ${ui.menu}
        `}
      >
        <header className="flex justify-between items-center p-2">
          <h2 className="font-mono text-xl pl-2">Your Cart</h2>
          <IconButton icon="Cross" onClick={closeMenu} />
        </header>
        <CartBody {...{ cart, total }} />
      </dialog>
    </>
  );
}
