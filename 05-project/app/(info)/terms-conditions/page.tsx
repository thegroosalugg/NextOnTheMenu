import { randomParagraph } from "@/components/util/word_generator";
import { Metadata } from "next";

export const metadata: Metadata = {
        title: "Terms & Conditions | Shopify",
  description: "Terms and conditions page",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 wrap-break-word">
      <h1 className="mb-4 text-4xl font-bold">Terms and conditions</h1>
      <p className="mb-6">
        {randomParagraph(100)}
      </p>
    </div>
  );
}
