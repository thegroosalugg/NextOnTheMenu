import Cart from "@/model/cart";
import CartItems from "./CartItems";
import CartCheckoutButton from "./CartCheckoutButton";
import Svg from "../ui/icon/Svg";
import Hr from "../ui/layout/Hr";

export default function CartBody({ cart, total }: { cart: Cart | null; total: string }) {
  return (
    <>
      {cart?.items.length ? (
        <CartItems {...{ cart }} />
      ) : (
        <div className="flex flex-col flex-auto items-center pt-[15%]">
          <Svg icon="ShoppingCart" size={100} />
          <p className="mt-2 font-mono">Your cart is empty.</p>
        </div>
      )}
      <Hr />
      <div className="flex justify-between gap-2 px-2">
        <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">Total</p>
        <p>${total} USD</p>
      </div>
      {+total > 0 && <CartCheckoutButton />}
    </>
  );
}
