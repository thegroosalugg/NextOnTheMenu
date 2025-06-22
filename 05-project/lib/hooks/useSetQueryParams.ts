import { useSearchParams } from "next/navigation";

export class QueryConfig {
       query: "size" | "color" = "color";
       value = "";
  isDefault? = false;
};

export function useSetQueryParams({ query, value, isDefault }: QueryConfig) {
  const searchParams = useSearchParams();

  let newParams;
  if (query && value) {
    newParams = new URLSearchParams(searchParams.toString());
    newParams.set(query, value);
  }

  const current = searchParams.get(query);
  const isActive =
    current === value || (isDefault && !current)
      ? `border-sky-700 dark:border-sky-400 text-sky-700 dark:text-sky-400 dark:bg-stone-700`
      : "border-transparent";

  return { queryParams: newParams?.toString(), isActive };
}
