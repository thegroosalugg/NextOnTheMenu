import client from "@/lib/mongo/mongodb";

type ProdImage = { src: string, color: string };

type Category = "backpack" | "headphones" | "hoodie" | "jacket" | "coat" | "tshirt";

export default class Product {
  readonly       _id: string      = '';
  readonly      name: string      = '';
  readonly     price: number      =  0;
  readonly      desc: string      = '';
  readonly  category: Category    = 'coat';
  readonly    images: ProdImage[] = [];
  readonly createdAt: string      = new Date().toISOString();
               views: number      =  0;

  private static getDb() {
    return client.db().collection<Product>("products");
  }

  static async getAll() {
    return await this.getDb().find().toArray();
  }

  static async getFeatured() {
    return await this.getDb().find().sort({ views: -1, createdAt: -1 }).limit(3).toArray();
  }
}
