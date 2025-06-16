import { ReactNode } from "react";

export default async function ProductHandleLayout({
  handle,
  recent,
}: {
  handle: ReactNode;
  recent: ReactNode;
}) {
  return (
    <>
      {handle}
      {recent}
    </>
  );
}
