import { ButtonHTMLAttributes } from "react";
import IconButton from "../ui/button/IconButton";

export default function CartOpenButton({
     total,
  ...props
}: { total: number } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="relative">
      <IconButton icon="ShoppingCart" {...props} />
      {total > 0 && (
        <span
          className="
            absolute -top-2 -right-2
            bg-accent text-bg text-center
            w-[20px] text-[10px]
            border rounded-lg
          "
        >
          {total}
        </span>
      )}
    </div>
  );
}
