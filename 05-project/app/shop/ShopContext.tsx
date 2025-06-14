'use client';
import Product from "@/model/product";
import { createContext, useContext } from "react";

export const ShopContext = createContext<Product[] | null>(null);

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be wrapped by ShopProvider");
  return ctx;
}

interface ShopProviderProps {
  children: React.ReactNode;
  products: Product[];
}

export function ShopProvider({ children, products }: ShopProviderProps) {
  return (
    <ShopContext.Provider value={products}>
      {children}
    </ShopContext.Provider>
  );
}
