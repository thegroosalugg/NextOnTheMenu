import Link from "next/link";
import Svg from "../icon/Svg";

export default function VercelLogo() {
  return (
    <Link
      href="https://vercel.com/templates/next.js/nextjs-commerce"
      className="
        flex gap-1 items-center
        ml-0 md:ml-auto
        overflow-hidden
        border rounded-xl
        bg-slate-100 dark:bg-slate-600
        border-slate-700 dark:border-slate-200
        shadow-xl
      "
    >
      <div
        className="
          flex items-center p-2
          bg-slate-600 dark:bg-slate-200
          [&>svg]:fill-slate-200         [&>svg]:dark:fill-slate-600
          [&>svg]:hover:fill-slate-600   [&>svg]:dark:hover:fill-slate-200
          [&>svg]:stroke-slate-600       [&>svg]:dark:stroke-slate-200
          [&>svg]:hover:stroke-slate-200 [&>svg]:dark:hover:stroke-slate-600
        "
      >
        <Svg icon="Vercel" />
      </div>
      <strong className="pl-1 pr-2">Vercel</strong>
    </Link>
  );
}
