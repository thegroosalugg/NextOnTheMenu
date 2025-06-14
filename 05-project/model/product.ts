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

  private static serialize(products: Product[]) {
    return products.map((product) => ({ ...product, _id: product._id.toString() }));
  }

  static async getAll() {
    const products = await this.getDb().find().sort({ createdAt: -1 }).toArray();
    return this.serialize(products);
  }

  static async getFeatured() {
    const products = await this.getDb().find().sort({ views: -1, createdAt: -1 }).limit(3).toArray();
    return this.serialize(products);
  }
}
