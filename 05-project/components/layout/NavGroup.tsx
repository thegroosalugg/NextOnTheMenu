import Category from "@/model/category";
import PathLink from "../ui/button/PathLink";

interface NavProps {
     links: Category[];
  onClick?: () => void;
      col?: boolean;
    hover?: string;
}

export default function NavGroup({ links, onClick, col, hover }: NavProps) {
  let styles = "gap-2 capitalize ";
  if (col) styles += "flex flex-col overflow-y-scroll";
  else     styles += "hidden md:flex";

  return (
    <nav className={styles}>
      <PathLink href="/shop" {...{ onClick, hover }}>All</PathLink>
      {links.map(({ _id, path, name }) => (
        <PathLink key={_id} href={`/shop/${path}`} {...{ onClick, hover }}>
          {name}
        </PathLink>
      ))}
    </nav>
  );
}
