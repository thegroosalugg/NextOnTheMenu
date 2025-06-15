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
    const categories = await this.getDb().find().toArray();
    return this.serialize(categories);
  }

  static async getLinks() {
    const categories = await this.getDb().find().limit(3).toArray();
    return this.serialize(categories);
  }

  static async isValid(path: string) {
    return (await this.getDb().countDocuments({ path }, { limit: 1 })) > 0;
  }
}
