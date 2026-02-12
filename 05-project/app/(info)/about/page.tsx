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
        I’m a full-stack developer based in Berlin. This demo rebuilds{" "}
        <a
          className="font-bold hover:text-sky-500 transition-all duration-500"
          href="https://vercel.com/templates/next.js/nextjs-commerce"
          target="_blank"
        >
          Vercel’s nextjs-commerce template
        </a>{" "}
        using Next.js 15 App Router. The same e-commerce functionality with minimal dependencies.
      </p>

      <h2 className="mb-2 text-lg font-semibold">Key Features:</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>Server-side cart stores cartId in cookies for persistence across sessions</li>
        <li>Cart data saved in MongoDB as items array linking productId, size, color & quantity</li>
        <li>Categories persisted in MongoDB for scalable product organization</li>
        <li>Product requests deduplicated and cached server-side for consistent data flow</li>
      </ul>

      <h2 className="mb-2 text-lg font-semibold">Tech Stack:</h2>
      <ul className="list-disc list-inside">
        <li>Next.js 15 (App Router, Turbopack dev server)</li>
        <li>React 19, TypeScript, Tailwind CSS 4</li>
        <li>MongoDB, Stripe (6 deps total)</li>
      </ul>

      <a
        className="block my-4 font-bold hover:font-black transition-all duration-500"
        href={process.env.VITE_PORTFOLIO_URL}
        target="_blank"
      >
        More from me
      </a>
    </div>
  );
}
