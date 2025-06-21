"use client";
import { useCart } from "@/components/cart/CartContext";
import PillButton from "@/components/ui/button/PillButton";
import { updateCart } from "@/lib/actions/cart";
import { useSearchParams } from "next/navigation";

export default function CartAddButton({ prodId }: { prodId: string }) {
  const { openMenu } = useCart();
  const searchParams = useSearchParams();
  const size = searchParams.get("size");
  const color = searchParams.get("color");

  async function clickHandler() {
    await updateCart({ prodId, size, color, $delta: "1" });
    openMenu();
  }

  return <PillButton onClick={clickHandler}>+ Add to Cart</PillButton>;
}
