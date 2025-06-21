"use client";
import IconButton from "../ui/button/IconButton";
import { useCart } from "./CartContext";
import CartItems from "./CartItems";
import Hr from "../ui/layout/Hr";
import PillButton from "../ui/button/PillButton";

export default function CartModal() {
  const { cart, ui, openMenu, closeMenu, getTotal } = useCart();
  const cartTotal = getTotal();
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
          flex flex-col gap-1
          h-screen w-screen md:w-2/5
          p-2 lg:p-4
          bg-white/92 dark:bg-black/92
          transition-transform duration-500 ease-in-out
          ${ui.menu}
        `}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-mono text-xl pl-6 md:pl-3">Your Cart</h2>
          <IconButton icon="Cross" onClick={closeMenu} />
        </div>
        {cart && <CartItems {...{ cart }} />}
        <Hr />
        <div className="flex justify-between gap-2 px-2">
          <p className="text-lg text-zinc-500 font-medium">Total</p>
          <p>${cartTotal} USD</p>
        </div>
        {+cartTotal > 0 && <PillButton>Proceed to Checkout</PillButton>}
      </dialog>
    </>
  );
}
