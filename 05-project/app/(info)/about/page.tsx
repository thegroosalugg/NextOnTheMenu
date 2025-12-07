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
        I’m a junior web developer based in Berlin. This demo app is a full-stack Next.js 15 project
        showcasing MongoDB integration, Stripe demo payments, and responsive UI. It includes automatic
        light/dark mode and lazy-loaded SVGs to demonstrate modern frontend practices.
      </p>

      <h2 className="mb-2 text-lg font-semibold">Key Features:</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>Server Actions connected to custom class models</li>
        <li>Optimized product fetching with caching and deduplication</li>
        <li>Responsive design for desktop and mobile devices</li>
        <li>Dynamic SVG icon handling and UI state management</li>
      </ul>

      <h2 className="mb-2 text-lg font-semibold">Built With:</h2>
      <ul className="list-disc list-inside">
        <li>Next.js 15 App Router (route groups & parallel routes)</li>
        <li>Tailwind 4 for utility-first styling</li>
        <li>MongoDB for database persistence</li>
        <li>Stripe API for demo payments</li>
      </ul>
    </div>
  );
}
