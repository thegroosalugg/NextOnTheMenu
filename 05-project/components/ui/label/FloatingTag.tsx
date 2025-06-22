import { ReactNode } from "react";

export default function FloatingTag({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        max-w-[90%]
        absolute z-10 left-[5%] bottom-[5%]
        flex gap-2 items-center
        bg-white/70 dark:bg-black/70
        text-xs md:text-sm font-extrabold
        leading-none tracking-tight
        py-1 pl-2 pr-1 md:py-2 md:pl-4 md:pr-2
        backdrop-blur-xl rounded-3xl
      "
    >
      {children}
    </div>
  );
}
