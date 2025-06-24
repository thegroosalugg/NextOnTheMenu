"use server";
import Product from "@/model/product";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export async function getProducts() {}

export const findProduct = unstable_cache(
  cache(async function findProduct(_id: string) {
    return await Product.findById(_id);
  })
);
