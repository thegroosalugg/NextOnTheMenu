import { unstable_cache } from "next/cache";
import { cache } from "react";

interface CacheOptions {
  revalidate?: number;
        tags?: string[];
}

export function cached<Args extends unknown[], T>(
  fetchData: (...args: Args) => Promise<T>,
   keyParts: string[],
    options: CacheOptions = {}
) {
  return unstable_cache(cache(fetchData), keyParts, options);
}
