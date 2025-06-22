import { ButtonHTMLAttributes, ReactNode } from "react";

export default function PillButton({
  children,
  ...props
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="
        bg-sky-700 text-white
        w-2/3 mx-auto py-1 px-2
        rounded-2xl hover:opacity-90
      "
    >
      {children}
    </button>
  );
}
