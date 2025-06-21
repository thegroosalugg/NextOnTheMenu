"use client";
import IconButton from "../ui/button/IconButton";
import { useCart } from "./CartContext";
import CartItems from "./CartItems";

export default function CartModal() {
  const { cart, ui, openMenu, closeMenu } = useCart();

  return (
    <>
      <IconButton icon="ShoppingCart" onClick={openMenu} />
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
          flex flex-col gap-3
          h-screen w-screen md:w-1/3
          p-2 lg:p-4
          bg-white/90 dark:bg-black/90
          transition-transform duration-500 ease-in-out
          ${ui.menu}
        `}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-mono text-xl pl-6 md:pl-3">Your Cart</h2>
          <IconButton icon="Cross" onClick={closeMenu} />
        </div>
        {cart && <CartItems {...{ cart }} />}
      </dialog>
    </>
  );
}
