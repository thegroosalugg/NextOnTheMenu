import { Metadata } from "next";

const latinWords = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
  'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
  'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'
];

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;


function randomParagraph(wordCount = 50) {
  let result = '';
  for (let i = 0; i < wordCount; i++) {
    const word = latinWords[rand(0, latinWords.length - 1)];
    result += word + (i === wordCount - 1 ? '.' : ' ');
  }
  return result;
}

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
