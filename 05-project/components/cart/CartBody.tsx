import CartItems from "./CartItems";
import CartCheckoutButton from "./CartCheckoutButton";
import Svg from "../ui/icon/Svg";
import Hr from "../ui/layout/Hr";
import IconButton from "../ui/button/IconButton";
import { useCart } from "./CartContext";

export default function CartBody() {
  const { cart, closeMenu, getTotal } = useCart();
  const total = getTotal("price").toFixed(2);

  return (
    <div className="flex flex-col gap-1 h-full overflow-y-scroll">
      <header className="flex justify-between items-center p-2">
        <h2 className="font-mono text-xl pl-2">Your Cart</h2>
        <IconButton icon="Cross" onClick={closeMenu} />
      </header>
      {cart?.items.length ? (
        <CartItems {...{ cart }} />
      ) : (
        <div className="flex flex-col flex-auto items-center pt-[15%]">
          <Svg icon="ShoppingCart" size={100} />
          <p className="mt-2 font-mono">Your cart is empty.</p>
        </div>
      )}
      <Hr />
      <div className="flex flex-col shrink-0 overflow-x-scroll p-0.5">
        <div className="flex justify-between gap-2 px-2">
          <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">Total</p>
          <p>${total} USD</p>
        </div>
        {+total > 0 && <CartCheckoutButton />}
      </div>
    </div>
  );
}
