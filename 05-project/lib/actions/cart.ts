"use server";
import { cookies } from "next/headers";
import Cart from "@/model/cart";
import CartItem from "@/model/cart_item";
import Product from "@/model/product";
import { Delta } from "../types/delta";

interface CartItemInput {
    prodId: string;
    color?: string | null;
     size?: string | null;
     delta: Delta;
}

export async function updateCart({
   prodId,
     size,
    color,
    delta,
}: CartItemInput) {
  const cartId = (await cookies()).get("cartId")?.value;

  const product = await Product.findById(prodId);
  if (!product) return;

  const item = CartItem.create({ product, size, color });
  const cart = await Cart.update({ cartId, item, delta });

  if (cart) {
    (await cookies()).set("cartId", cart._id);
  }

  return cart;
}
