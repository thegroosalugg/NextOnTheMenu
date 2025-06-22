"use client";
import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import { updateCart } from "@/lib/actions/cart";
import { useSearchParams } from "next/navigation";
import PillButton from "@/components/ui/button/PillButton";

export default function CartAddButton({ prodId }: { prodId: string }) {
  const { openMenu } = useCart();
  const [pending, setPending] = useState(false);
  const searchParams = useSearchParams();
  const size = searchParams.get("size");
  const color = searchParams.get("color");

  async function clickHandler() {
    if (pending) return;
    setPending(true);
    openMenu();
    setTimeout(() => setPending(false), 500);
    await updateCart({ prodId, size, color, $delta: "1" });
  }

  return <PillButton onClick={clickHandler}>+ Add to Cart</PillButton>;
}
