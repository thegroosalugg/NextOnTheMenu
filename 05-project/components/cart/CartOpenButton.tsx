import IconButton from "../ui/button/IconButton";
import { useCart } from "./CartContext";

export default function CartOpenButton() {
  const { openMenu, getTotal } = useCart();

  const total = getTotal("quantity");
  return (
    <div className="relative">
      <IconButton icon="ShoppingCart" onClick={openMenu} />
      {total > 0 && (
        <span
          className="
            absolute -top-2 -right-2
            bg-accent text-bg text-center
            w-[20px] text-[10px]
            border rounded-lg
          "
        >
          {total}
        </span>
      )}
    </div>
  );
}
