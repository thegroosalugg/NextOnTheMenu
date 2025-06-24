"use server";
import Category from "@/model/category";
import { cached } from "./cache";

export const getCategories = cached(
  async () => await Category.getAll(),
  ["category"]
);

export const getLinks = cached(
  async () => await Category.getLinks(),
  ["category", "links"]
);

export const checkCategory = cached(
  async (category: string) => await Category.isValid(category),
  ["category", "isValid"]
);
