import ImageTile from "../ui/image/ImageTile";
import CartActions from "./CartActions";
import { useCart } from "./CartContext";
// top level CartModal "uses client";
export default function CartItems() {
  const { cart } = useCart();

  return (
    <ul className="flex flex-col flex-auto gap-2 min-h-30 overflow-scroll p-1">
      {cart.items.map((cartItem) => {
        const { _id, name, size, color, image, price, quantity } = cartItem;
        return (
          <li key={`${_id}${color}${size}`} className="flex min-w-[240px]">
            <div className="h-20 w-20 shrink-0">
              <ImageTile
                href={`/product/${_id}?color=${color}&size=${size}`}
                src={`/shop/${image.src}`}
                alt={`${name} ${color}`}
              />
            </div>
            <div className="flex-auto min-w-0 p-1">
              <h2 className="line-clamp-2">{name}</h2>
              <p className="truncate text-zinc-500 dark:text-zinc-400 text-sm">
                {size && <span className="uppercase">{`${size} | `}</span>}
                <span className="capitalize">{color}</span>
              </p>
            </div>
            <div className="w-[80px] shrink-0">
              <p className="font-mono text-sm text-nowrap my-2">
                ${(price * quantity).toFixed(2)} USD
              </p>
              <CartActions {...cartItem} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
