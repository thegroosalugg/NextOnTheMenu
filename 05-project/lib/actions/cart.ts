"use server";
import { cookies } from "next/headers";
import Cart from "@/model/cart";
import CartItem from "@/model/cart_item";
import Product from "@/model/product";

interface CartItemInput {
    prodId: string;
    color?: string | null;
     size?: string | null;
    $delta: string;
}

export async function loadCart() {
  const cartId = (await cookies()).get("cartId")?.value;
  const cart = await Cart.load(cartId);
  if (!cart) return null;

  const products = await Product.getAll({ match: cart.items });
  return Cart.merge(cart, products);
}

const deltaMap = { "1": 1, "-1": -1 } as const;

export async function updateCart({ prodId, size, color, $delta }: CartItemInput) {
  const delta = deltaMap[$delta as keyof typeof deltaMap];
  if (!delta) return console.log('Invalid Delta');

  const cartId = (await cookies()).get("cartId")?.value;

  const product = await Product.findById(prodId);
  if (!product) return;

  const item = CartItem.create({ product, size, color });
  const successId = await Cart.update({ cartId, item, delta });

  if (successId) (await cookies()).set("cartId", successId);
  else           (await cookies()).delete("cartId");

  return successId;
}
