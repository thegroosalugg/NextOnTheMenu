import CartItems from "./CartItems";
import CartCheckoutButton from "./CartCheckoutButton";
import Svg from "../ui/icon/Svg";
import Hr from "../ui/layout/Hr";
import IconButton from "../ui/button/IconButton";
import { useCart } from "./CartContext";

export default function CartBody() {
  const { cart, closeMenu } = useCart();
  const totalPrice = cart.total.price;

  return (
    <div className="flex flex-col gap-1 h-dvh p-4 lg:p-6 overflow-auto">
      <header className="flex justify-between items-start">
        <h2 className="font-mono text-xl truncate">Your Cart</h2>
        <IconButton icon="Cross" onClick={closeMenu} />
      </header>
      {cart.items.length ? (
        <CartItems />
      ) : (
        <div className="flex flex-col flex-auto items-center pt-[15%]">
          <Svg icon="ShoppingCart" size={100} />
          <p className="mt-2 font-mono">Your cart is empty.</p>
        </div>
      )}
      <div className="flex flex-col shrink-0 overflow-x-scroll p-0.5">
        <Hr />
        <p className="flex flex-wrap items-center justify-between min-w-fit px-2">
          <span className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">
            Total
          </span>
          <span>${totalPrice.toFixed(2)} USD</span>
        </p>
        {totalPrice > 0 && <CartCheckoutButton />}
      </div>
    </div>
  );
}
