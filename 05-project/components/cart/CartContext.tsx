"use client";
import Cart from "@/model/cart";
import { createContext, useContext, useState, ReactNode, useOptimistic } from "react";
import { calcTotal } from "@/lib/util/calc_total";
import { CartItemInput } from "@/lib/actions/cart";

type CartTotal = { total: { price: number; quantity: number } };

type CartContext = {
           cart: Cart & CartTotal;
  updateOptCart: (action: CartItemInput) => void;
             ui: { menu: string; backdrop: string };
       openMenu: () => void;
      closeMenu: () => void;
};

export const CartContext = createContext<CartContext | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be wrapped by CartProvider");
  return ctx;
}

interface CartProviderProps {
      cart: Cart | null;
  children: ReactNode;
}

const  hidden = { menu: "translate-x-full", backdrop: "opacity-0 pointer-events-none"  };
const visible = { menu: "translate-x-0",    backdrop: "opacity-70 pointer-events-auto" };

export function CartProvider({ cart, children }: CartProviderProps) {
  const [ui, setUi] = useState(hidden);
  const  openMenu = () => setUi(visible);
  const closeMenu = () => setUi(hidden);

  const total = calcTotal(cart?.items);
  const initialCart = cart ? { ...cart, total } : { _id: "", items: [], total };

  const [optimisticCart, updateOptCart] = useOptimistic(
    initialCart,
    (cart, { prodId, size, color, $delta }: CartItemInput) => {
      if (!["1", "-1"].includes($delta)) return cart;

      const items = [...cart.items];
      const index = items.findIndex(
        (item) => item._id === prodId && item.size === size && item.color === color
      );

      if (index === -1) return cart;

      const item = { ...items[index] };
      item.quantity += +$delta;

      if (item.quantity <= 0) items.splice(index, 1);
      else items[index] = item;

      const total = calcTotal(items);
      return { ...cart, items, total };
    }
  );

  const cartValue = { cart: optimisticCart, updateOptCart, ui, openMenu, closeMenu };

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
}
