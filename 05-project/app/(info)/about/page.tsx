import { Metadata } from "next";

export const metadata: Metadata = {
        title: 'About | Shopify',
  description: 'About the project',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 wrap-break-word">
      <h1 className="mb-4 text-4xl font-bold">About</h1>

      <p className="mb-6">
        I’m a junior web developer seeking my first role. This app showcases a full-stack
        Next.js 15 project using Tailwind 4, MongoDB, and a Stripe demo, with automatic
        light/dark mode and lazy-loaded SVGs.
      </p>

      <h2 className="mb-2 text-lg font-semibold">Key Features:</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>Server Actions wired to custom class models</li>
        <li>Product fetching deduplicated and cached</li>
        <li>Responsive design for all devices</li>
      </ul>

      <h2 className="mb-2 text-lg font-semibold">Built With:</h2>
      <ul className="list-disc list-inside">
        <li>Next.js 15 App Router (route groups & parallel routes)</li>
        <li>Tailwind 4 for utility-first styling</li>
        <li>MongoDB for data persistence</li>
      </ul>
    </div>
  );
}
