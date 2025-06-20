"use client";
import { useCart } from "@/components/cart/CartContext";
import { updateCart } from "@/lib/actions/cart";
import { useSearchParams } from "next/navigation";

export default function CartAddButton({ prodId }: { prodId: string }) {
  const { openMenu, setCart } = useCart();
  const searchParams = useSearchParams();
  const size  = searchParams.get("size");
  const color = searchParams.get("color");

  async function clickHandler() {
    const cart = await updateCart({ prodId, size, color, delta: 1 });
    setCart(cart);
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
