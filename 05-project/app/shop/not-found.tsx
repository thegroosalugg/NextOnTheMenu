import { Metadata } from "next";

const description = "No products found for this search.";

export const metadata: Metadata = { title: "Category not listed", description };

export default function NotFound() {
  return <h1 className="text-center mt-[5%]">{description}</h1>;
}
