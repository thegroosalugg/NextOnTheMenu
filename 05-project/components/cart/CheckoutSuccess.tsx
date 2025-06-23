"use client";

import { deleteCookie } from "@/lib/actions/cart";
import { useEffect } from "react";

export default function CheckoutSuccess() {
  useEffect(() => {
    deleteCookie();
  }, []);

  return (
    <p className="mt-[5%] text-center text-2xl font-mono wrap-break-word">
      Order placed successfully.
    </p>
  );
}
