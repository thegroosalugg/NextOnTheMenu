import client from "@/lib/mongo/mongodb";

export default class Category {
  readonly      _id: string = '';
  readonly category: string = '';

  private static getDb() {
    return client.db().collection<Category>("categories");
  }

  static async getCategories() {
    const categories = await this.getDb().find().toArray();
    return categories.map(({ category }) => category);
  }

  static async isValid(category: string) {
    return await this.getDb().countDocuments({ category }, { limit: 1 }) > 0;
  }
}
