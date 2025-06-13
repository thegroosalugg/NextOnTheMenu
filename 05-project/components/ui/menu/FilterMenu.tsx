"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function FilterMenu({ label, menu }: { label: string; menu: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const controlId = label.replace(/[\s_]+/g, "-");

  function navTo(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    router.push(`${pathname}?search=${value}`);
  }

  return (
    <>
      <ul className="hidden md:flex flex-col p-4">
        <h2>{label}</h2>
        {menu.map((item) => (
          <li key={item}>
            <Link href={`?search=${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <p className="flex md:hidden flex-col w-[90%] mx-auto">
        <label htmlFor={controlId} className="capitalize text-slate-400 font-bold">
          {label}
        </label>
        <select
          id={controlId}
          onChange={navTo}
          className="border border-zinc-500 bg-slate-100"
        >
          {menu.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </p>
    </>
  );
}
