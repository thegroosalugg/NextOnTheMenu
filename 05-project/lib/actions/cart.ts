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

export async function loadCart() {
  const cartId = (await cookies()).get("cartId")?.value;
  const cart = await Cart.load(cartId);
  if (!cart) return null;

  const products = await Product.getAll({ match: cart.items });
  return Cart.merge(cart, products);
}

export async function updateCart({ prodId, size, color, delta }: CartItemInput) {
  const cartId = (await cookies()).get("cartId")?.value;

  const product = await Product.findById(prodId);
  if (!product) return;

  const item = CartItem.create({ product, size, color });
  const cart = await Cart.update({ cartId, item, delta });

  if (cart) (await cookies()).set("cartId", cart._id);
  else      (await cookies()).delete("cartId");

  return cart;
}
