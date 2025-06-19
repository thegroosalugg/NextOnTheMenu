import { ButtonHTMLAttributes } from "react";
import { IconType } from "../icon/icon.model";
import Svg from "../icon/Svg";

export default function IconButton({
     icon,
  ...props
}: { icon: IconType } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="
        flex items-center
        bg-stone-100 dark:bg-stone-700
        border border-accent rounded-sm
        p-1 w-fit
      "
    >
      <Svg {...{ icon, size: 20 }} />
    </button>
  );
}
