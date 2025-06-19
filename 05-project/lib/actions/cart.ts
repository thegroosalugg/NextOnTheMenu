"use server";
import Cart from "@/model/cart";
import { cookies } from "next/headers";
import { AdjustByOne } from "../types/adjust_by_one";

export async function addToCart(prodId: string, quantity: AdjustByOne = 1) {
  const cartId = (await cookies()).get("cartId")?.value;

  const cart = await Cart.update(prodId, cartId, quantity);

  if (cart) {
    (await cookies()).set("cartId", cart._id);
  }
}
