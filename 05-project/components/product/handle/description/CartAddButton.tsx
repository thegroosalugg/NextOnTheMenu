"use client";
import { useCart } from "@/components/cart/CartContext";
import { addToCart } from "@/lib/actions/cart";

export default function CartAddButton({ _id }: { _id: string }) {
  const { openMenu } = useCart();

  async function clickHandler() {
    await addToCart(_id);
    openMenu();
  }

  return (
    <button
      onClick={clickHandler}
      className="
        bg-sky-700 text-white
        w-2/3 mx-auto py-1 px-2
        rounded-2xl hover:opacity-90
      "
    >
      + Add to Cart
    </button>
  );
}
