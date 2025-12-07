import { Metadata } from "next";

export const metadata: Metadata = {
        title: "Terms & Conditions | Shopify",
  description: "Terms and conditions page",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 wrap-break-word">
      <h1 className="mb-4 text-4xl font-bold">Terms & Conditions</h1>

      <p className="mb-6">
        This demo app is built solely for learning and demonstration purposes. It is not a real service,
        so do not rely on it for any important tasks. Feel free to explore the features and experiment freely.
      </p>

      <h2 className="mb-2 text-lg font-semibold">Usage Guidelines:</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>All interactions are for demo purposes only; no authentication is required.</li>
        <li>Stripe runs in sandbox mode; use 4242 4242 4242 4242 as the card number with any dummy details.</li>
        <li>Do not input real sensitive information; use test or placeholder data.</li>
      </ul>
    </div>
  );
}
