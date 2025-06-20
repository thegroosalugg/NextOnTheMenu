"use server";
import Cart from "@/model/cart";
import CartItem, { CartItemInput } from "@/model/cart_item";
import Product from "@/model/product";
import { cookies } from "next/headers";

export async function addToCart({
   prodId,
     size,
    color,
}: Omit<CartItemInput, "product"> & { prodId: string }) {
  const cartId = (await cookies()).get("cartId")?.value;

  const product = await Product.findById(prodId);
  if (!product) return;

  const item = CartItem.create({ product, size, color });
  const cart = await Cart.AddItem({ item, cartId });

  if (cart) {
    (await cookies()).set("cartId", cart._id);
  }

  return cart;
}
