import "@/lib/mongo/initdb"; // create dummy data if non existent
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
