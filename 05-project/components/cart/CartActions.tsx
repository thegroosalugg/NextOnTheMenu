import CartItem from "@/model/cart_item";
import Svg from "../ui/icon/Svg";
import { updateCart } from "@/lib/actions/cart";

export default function CartActions({ _id, color, size, quantity }: CartItem) {
  async function clickHandler(formData: FormData) {
    const $delta = formData.get("delta") + "";
    await updateCart({ prodId: _id, size, color, $delta });
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
