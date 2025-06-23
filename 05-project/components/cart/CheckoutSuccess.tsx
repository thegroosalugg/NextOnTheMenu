"use client";

import { deleteCookie } from "@/lib/actions/cart";
import { useEffect } from "react";

export default function CheckoutSuccess() {
  useEffect(() => {
    deleteCookie();
  }, []);

  return <p className="text-center mt-[5%]">Order successfully placed</p>;
}
