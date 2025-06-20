'use client';
import Cart from "@/model/cart";
import { createContext, useContext, useState, ReactNode } from "react";

type CartContext = {
        _id: Cart["_id"];
      items: Cart["items"];
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
      cart: Cart;
  children: ReactNode;
}

const  hidden = { menu: "translate-x-full", backdrop: "opacity-0 pointer-events-none"  };
const visible = { menu: "translate-x-0",    backdrop: "opacity-70 pointer-events-auto" };

export function CartProvider({ cart, children }: CartProviderProps) {
  const [ui, setUi] = useState(hidden);
  const  openMenu = () => setUi(visible);
  const closeMenu = () => setUi(hidden);

  const { _id, items } = cart;

  const cartValue = {
    _id,
    items,
    ui,
    openMenu,
    closeMenu,
  };

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
}
