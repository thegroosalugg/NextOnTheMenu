import Cart from "@/model/cart";
import ImageTile from "../ui/image/ImageTile";

export default function CartItems({ cart }: { cart: Cart }) {
  return (
    <ul className="overflow-y-scroll">
      {cart.items.map(({ _id, name, size, color, image, price, quantity }) => (
        <li key={`${_id}${color}${size}`}>
          <ImageTile
            href={`/product/${_id}`}
            src={`/shop/${image.src}`}
            alt={`${name} ${color}`}
          />
        </li>
      ))}
    </ul>
  );
}
