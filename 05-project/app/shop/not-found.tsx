import { Metadata } from "next";

export const metadata: Metadata = {
        title: "Category not listed",
  description: "No products listed in this category",
};

export default function NotFound() {
  return (
    <h1 className="text-center mt-[5%]">No products listed in this category</h1>
  );
}
