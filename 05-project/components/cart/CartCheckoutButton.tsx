import { goToCheckout } from "@/lib/actions/cart";
import PillButton from "../ui/button/PillButton";
// top level CartModal "uses client";
export default function CartCheckoutButton() {

  return <PillButton onClick={goToCheckout}>Proceed to Checkout</PillButton>;
}
