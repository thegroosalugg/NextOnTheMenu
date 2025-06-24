import client from "@/lib/mongo/mongodb";
import { SortFilter } from "@/model/sort_filter";

export default class Category extends SortFilter {
  private static getDb() {
    return client.db().collection<Category>("categories");
  }

  private static serialize(categories: Category[]) {
    return categories.map((cat) => ({ ...cat, _id: cat._id.toString() }));
  }

  static async getAll() {
    console.log("Fetching Categories"); // **LOGGING
    try {
      const categories = await this.getDb().find().toArray();
      return this.serialize(categories);
    } catch (error) {
      console.log("Category.getAll", error);
      return [{ _id: "1", path: "/", name: "All" }]; // fallback remains on /shop
    }
  }

  static async getLinks() {
    console.log("Fetching Links"); // **LOGGING
    try {
      const categories = await this.getDb().find().limit(3).toArray();
      return this.serialize(categories);
    } catch (error) {
      console.log("Category.getLinks", error);
      return []; // keep nav alive - show no links
    }
  }

  static async isValid(path: string) {
    console.log("Checking Category is valid"); // **LOGGING
    try {
      return (await this.getDb().countDocuments({ path }, { limit: 1 })) > 0;
    } catch (error) {
      console.log("Category.isValid", error);
    }
  }
}
