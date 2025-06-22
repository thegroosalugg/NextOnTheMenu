import { Metadata } from "next";

const description = "The page you are looking for cannot be found.";

export const metadata: Metadata = { title: "not found", description };

export default function NotFound() {
  return <h1 className="text-center mt-[5%]">{description}</h1>;
}
