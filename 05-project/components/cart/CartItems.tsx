import Cart from "@/model/cart";
import ImageTile from "../ui/image/ImageTile";
import CartActions from "./CartActions";
import { useOptimistic } from "react";
import { CartItemInput } from "@/lib/actions/cart";
// top level CartModal "uses client";
export default function CartItems({ cart }: { cart: Cart }) {
  const [optimisticItems, updateOptimisticItems] = useOptimistic(
    cart.items,
    (items, { prodId, size, color, $delta }: CartItemInput) => {
      if (!["1", "-1"].includes($delta)) return items;

      const cloned = [...items];
      const index = cloned.findIndex(
        (item) => item._id === prodId && item.size === size && item.color === color
      );

      if (index === -1) return cloned;

      const item = { ...cloned[index] };
      item.quantity += +$delta;
      if (item.quantity <= 0) cloned.splice(index, 1);
      else cloned[index] = item;
      return cloned;
    }
  );

  return (
    <ul className="flex flex-col flex-auto gap-2 min-h-30 overflow-y-scroll py-2 px-6">
      {optimisticItems.map((cartItem) => {
        const { _id, name, size, color, image, price, quantity } = cartItem;
        return (
          <li key={`${_id}${color}${size}`} className="flex">
            <div className="h-20 w-20 shrink-0">
              <ImageTile
                href={`/product/${_id}?color=${color}&size=${size}`}
                src={`/shop/${image.src}`}
                alt={`${name} ${color}`}
              />
            </div>
            <div className="flex-auto p-1 min-w-0">
              <h2 className="line-clamp-2">{name}</h2>
              <p className="truncate text-zinc-500 dark:text-zinc-400 text-sm">
                {size && <span className="uppercase">{`${size} | `}</span>}
                <span className="capitalize">{color}</span>
              </p>
            </div>
            <div className="ml-6 w-[80px] shrink-0">
              <p className="font-mono text-sm text-nowrap my-2">
                ${(price * quantity).toFixed(2)} USD
              </p>
              <CartActions {...{ ...cartItem, updateOptimisticItems }} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
