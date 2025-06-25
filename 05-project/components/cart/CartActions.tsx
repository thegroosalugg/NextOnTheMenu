import CartItem from "@/model/cart_item";
import Svg from "../ui/icon/Svg";
import { updateCart } from "@/lib/actions/cart";
import { useRef } from "react";
import { useCart } from "./CartContext";
// top level CartModal "uses client";
export default function CartActions({ _id, color, size, quantity }: CartItem) {
  const throttling = useRef(false);
  const { updateOptCart } = useCart();

  async function clickHandler(formData: FormData) {
    if (throttling.current) return;
    throttling.current = true;
    const $delta = formData.get("delta") + "";
    const data = { prodId: _id, size, color, $delta };
    updateOptCart(data);
    setTimeout(() => (throttling.current = false), 200);
    await updateCart(data);
  }

  return (
    <form className="flex justify-between gap-2" action={clickHandler}>
      <button name="delta" value="-1">
        <Svg icon="Minus" />
      </button>
      <p>{quantity}</p>
      <button name="delta" value="1">
        <Svg icon="Plus" />
      </button>
    </form>
  );
}
