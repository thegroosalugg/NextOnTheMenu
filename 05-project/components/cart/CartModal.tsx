"use client";
import { useCart } from "./CartContext";
import CartBody from "./CartBody";
import CartOpenButton from "./CartOpenButton";

export default function CartModal() {
  const { ui, closeMenu } = useCart();

  return (
    <>
      <CartOpenButton />
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
          h-screen w-screen md:w-2/5
          bg-white/92 dark:bg-black/92
          transition-transform duration-500 ease-in-out
          ${ui.menu}
        `}
      >
        <CartBody />
      </dialog>
    </>
  );
}
