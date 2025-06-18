import Category from "@/model/category";
import NavLink from "./NavLink";

interface NavProps {
     links: Category[];
  onClick?: () => void;
      col?: boolean;
}

export default function NavGroup({ links, onClick, col }: NavProps) {
  let styles = "gap-2 capitalize ";
  if (col) styles += "flex flex-col overflow-y-scroll";
  else     styles += "hidden md:flex";

  return (
    <nav className={styles}>
      <NavLink href="/shop" {...{ onClick }}>All</NavLink>
      {links.map(({ _id, path, name }) => (
        <NavLink key={_id} href={`/shop/${path}`} {...{ onClick }}>
          {name}
        </NavLink>
      ))}
    </nav>
  );
}
