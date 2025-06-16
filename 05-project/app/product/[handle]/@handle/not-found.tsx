import { Metadata } from "next";

export const metadata: Metadata = {
        title: "Product not found",
  description: "unable to find product",
};

export default function NotFound() {
  return (
    <h1 className="text-center mt-[5%]">This product doesn&apos;t exist.</h1>
  );
}
