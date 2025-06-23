import CheckoutSuccess from "@/components/cart/CheckoutSuccess";
import { Param } from "@/lib/types/param";
import Cart from "@/model/cart";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Param<"token">;
}) {
  const { token } = await searchParams;
  const cartId = (await cookies()).get("cartId")?.value;
  if (!token || !cartId) notFound();

  const res = await Cart.token({ cartId, token, deleteCart: true });
  if (res?.deletedCount === 0) notFound();

  return <CheckoutSuccess />;
}
