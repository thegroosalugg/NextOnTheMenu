import VariantButton from "@/components/ui/button/VariantButton";
import { ReactNode } from "react";

export default function ButtonRow({
     items,
    params,
      font = "capitalize",
  children,
}: {
     items: string[];
    params: string;
     font?: "uppercase" | "capitalize";
  children: ReactNode;
}) {
  return (
    <>
      <h2 className="uppercase font-bold text-lg">{children}</h2>
      <ul className="flex flex-wrap gap-2 mt-1 mb-4">
        {items.map((item) => (
          <li key={item}>
            <VariantButton {...{ font, href: `${params}${item}` }}>{item}</VariantButton>
          </li>
        ))}
      </ul>
    </>
  );
}
