import { goToCheckout } from "@/lib/actions/cart";
import PillButton from "../ui/button/PillButton";
import { useState } from "react";
import Loader from "../ui/boundary/Loader";
// top level CartModal "uses client";
export default function CartCheckoutButton() {
  const [pending, setPending] = useState(false);

  async function clickHandler() {
    if (pending) return;
    setPending(true);
    await goToCheckout();
    setPending(false);
  }

  return (
    <PillButton onClick={clickHandler} classes="text-sm lg:text-base">
      {pending ? <Loader size="xs" color="bg" /> : "Proceed to Checkout"}
    </PillButton>
  );
}
