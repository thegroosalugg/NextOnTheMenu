'use client';
import { useShop } from "@/app/shop/ShopContext";
import TileList from "../product/TileList";

export function ShopProducts() {
  const products = useShop();
  return <TileList {...{ products }} />;
}

export function ProductsByCategory({ category }: { category: string }) {
  const products = useShop();
  return <TileList {...{ products }} />;
}
