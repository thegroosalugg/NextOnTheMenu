import { Metadata } from "next";

const description = "This product doesn't exist.";

export const metadata: Metadata = { title: "Product not found", description };

export default function NotFound() {
  return <h1 className="text-center mt-[5%]">{description}</h1>;
}
