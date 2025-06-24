import CheckoutSuccess from "@/components/cart/CheckoutSuccess";
import { Param } from "@/lib/types/param";
import Cart from "@/model/cart";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
        title: 'Order Confirmed',
  description: 'Order success page',
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Param<"token"> & Param<"confirmation">;
}) {
  const { token, confirmation } = await searchParams;
  const cookieStore = await cookies();
  const confirmId   = cookieStore.get("confirmId")?.value;
  const cartId      = cookieStore.get("cartId")?.value;

  const badRequest =
    // neither a first-time token nor a follow-up confirm
    (!confirmId && !token) ||
    // a stale or mismatched confirmation
    (confirmId && confirmId !== confirmation);

  if (badRequest) notFound();

  if (!confirmId) {
    if (!cartId) notFound();

    const res = await Cart.token({ cartId, token, deleteCart: true });
    if (!res?.deletedCount) notFound();
  }

  return <CheckoutSuccess />;
}
