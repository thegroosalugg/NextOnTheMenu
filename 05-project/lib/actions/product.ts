"use server";
import Product, { FetchProdOptions } from "@/model/product";
import { cached } from "./cache";

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
