import CartItem from "@/model/cart_item";
import Svg from "../ui/icon/Svg";
import { CartItemInput, updateCart } from "@/lib/actions/cart";
import { useRef } from "react";
// top level CartModal "uses client";
export default function CartActions({
  _id,
  color,
  size,
  quantity,
  updateOptimisticItems,
}: CartItem & { updateOptimisticItems: (action: CartItemInput) => void }) {
  const throttling = useRef(false);

  async function clickHandler(formData: FormData) {
    if (throttling.current) return;
    throttling.current = true;
    const $delta = formData.get("delta") + "";
    const data = { prodId: _id, size, color, $delta };
    updateOptimisticItems(data);
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
