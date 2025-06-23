"use server";
import { cookies } from "next/headers";
import Cart from "@/model/cart";
import CartItem from "@/model/cart_item";
import Product from "@/model/product";
import Stripe from 'stripe';
import { redirect } from "next/navigation";

export async function loadCart() {
  const cartId = (await cookies()).get("cartId")?.value;
  const cart = await Cart.load(cartId);
  if (!cart) return null;

  const products = await Product.getAll({ match: cart.items });
  return Cart.merge(cart, products);
}

export interface CartItemInput {
    prodId: string;
    color?: string | null;
     size?: string | null;
    $delta: string;
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

const stripe = new Stripe(process.env.STRIPE_SECRET!);

export async function goToCheckout() {
  const cart = await loadCart();
  if (!cart) return null;

  const line_items = cart.items.map(({ name, desc: description, price, quantity }) => ({
      quantity, // required & reserved stripe props
    price_data: {
          currency: "usd", // JS will not give .2 floats even when the initial floats were .2
       unit_amount: Math.round(price * 100), // price must be in cents in STRIPE
      product_data: { name, description },
    },
  }));

  const     url = process.env.SITE_URL;
  const session = await stripe.checkout.sessions.create({
           mode: 'payment',
     line_items,
    success_url: `${url}success`,
     cancel_url: `${url}cancel`,
  });

  redirect(session.url!);
}
