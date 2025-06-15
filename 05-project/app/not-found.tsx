import { Metadata } from "next";

export const metadata: Metadata = {
        title: "not found",
  description: "unable to find page",
};

export default function NotFound() {
  return (
    <h1 className="text-center mt-[5%]">The page you are looking for cannot be found.</h1>
  );
}
