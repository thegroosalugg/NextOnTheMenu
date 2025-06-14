"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Svg from "../icon/Svg";

interface ItemProps {
  params: string;
    item: string;
}

function FilterItem({ params, item, ...props }: ItemProps) {
  return (
    <li key={item}>
      <Link
        {...props}
        href={`${params}${item}`}
        className="hover:underline underline-offset-2"
      >
        {item.replace(/[-_]+/g, " ")}
      </Link>
    </li>
  );
}

interface MenuProps {
  params: string;
   label: string;
    menu: string[];
}

export default function FilterMenu({ params, label, menu }: MenuProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, []);

  return (
    <>
      <ul className="hidden md:flex flex-col p-4 capitalize">
        <h2 className="text-slate-400 font-bold">{label}</h2>
        {menu.map((item) => (
          <FilterItem key={item} {...{ params, item }} />
        ))}
      </ul>
      <div
        ref={menuRef}
        className="flex md:hidden flex-col w-[80%] relative mx-auto mt-4 capitalize"
      >
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="
            border rounded-sm
            bg-stone-100 dark:bg-stone-600
            capitalize
            flex justify-between items-center
            px-4 py-1
          "
        >
          {label} <Svg icon={showMenu ? "ChevronUp" : "ChevronDown"} size={24} />
        </button>
        {showMenu && (
          <ul
            className="
              absolute z-20 top-9 w-full
              border rounded-sm px-4 py-1
              bg-stone-100 dark:bg-stone-600
              animate-dropdown
            "
          >
            {menu.map((item) => (
              <FilterItem
                key={item}
                {...{ params, item, onClick: () => setShowMenu(false) }}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
