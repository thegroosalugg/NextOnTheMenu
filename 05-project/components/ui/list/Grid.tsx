import { ReactNode } from "react";

interface ListProps<T> {
     items: T[];
   scroll?: boolean;
     hero?: boolean;
  children: (item: T, index: number) => ReactNode;
}

export default function Grid<T extends { _id: string }>({
     items,
    scroll,
      hero,
  children,
}: ListProps<T>) {
  let styles = "grid gap-4 p-4 mx-auto overflow-x-scroll ";

  if (hero) {
    styles += "md:grid-cols-6 md:grid-rows-2 max-w-screen-2xl";
  } else if (scroll) {
    styles += "grid-flow-col auto-cols-[280px] [&>li]:animate-scroll";
  } else {
    styles += `
      grid-cols-[repeat(auto-fill,minmax(160px,1fr))]
      pointer-fine:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]
    `;
  }

  return (
    <ul className={styles}>
      {items.map((item, index) => (
        <li
          key={item._id}
          className={
            hero && index === 0
              ? "md:col-span-4 md:row-span-2"
              : hero && index > 0
              ? "md:col-span-2 md:row-span-1"
              : ""
          }
        >
          {children(item, index)}
        </li>
      ))}
    </ul>
  );
}
