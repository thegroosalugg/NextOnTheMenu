import { ReactNode } from "react";

export default async function HomeLayout({
   featured,
  catalogue,
}: {
   featured: ReactNode;
  catalogue: ReactNode;
}) {
  return (
    <>
      {featured}
      {catalogue}
    </>
  );
}
