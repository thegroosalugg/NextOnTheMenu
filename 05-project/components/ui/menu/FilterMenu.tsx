"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function FilterMenu({ label, menu }: { label: string; menu: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const controlId = label.replace(/[\s_]+/g, '-');

  function navTo(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    router.push(`${pathname}?search=${value}`);
  }

  return (
    <>
      <ul className="hidden md:flex flex-col py-4 px-2">
        <h2>{label}</h2>
        {menu.map((item) => (
          <li key={item}>
            <Link href={`?search=${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <p className="flex md:hidden flex-col">
        <label htmlFor={controlId}>{label}</label>
        <select id={controlId} onChange={navTo}>
          {menu.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </p>
    </>
  );
}
