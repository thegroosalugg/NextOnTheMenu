import { ReactNode } from "react";

export default async function Home({
  feature,
   scroll,
}: {
  feature: ReactNode;
   scroll: ReactNode;
}) {
  return (
    <>
      {feature}
      {scroll}
    </>
  );
}
