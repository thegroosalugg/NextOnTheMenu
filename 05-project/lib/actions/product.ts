"use server";
import Product, { FetchProdOptions } from "@/model/product";
import { unstable_cache } from "next/cache";
import { cache } from "react";

interface CacheOptions {
  revalidate?: number;
        tags?: string[];
}

function cached<Args extends unknown[], T>(
  fetchData: (...args: Args) => Promise<T>,
   keyParts: string[],
    options: CacheOptions = {}
) {
  return unstable_cache(cache(fetchData), keyParts, options);
}

export const findProduct = cached(
  async (_id: string) => await Product.findById(_id),
  ["product"]
);

export const getProducts = cached(
  async (options?: FetchProdOptions) => await Product.getAll(options),
  ["products"]
);

export const getFeatured = cached(
  async () => await Product.getFeatured(),
  ["featured"]
);
