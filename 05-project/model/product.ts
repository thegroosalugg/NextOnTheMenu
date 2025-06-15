import client from "@/lib/mongo/mongodb";
import { ObjectId } from "mongodb";

type ProdImage = { src: string; color: string };
type ProductDB = Omit<Product, "_id"> & { _id: ObjectId };

export default class Product {
  readonly       _id: string      = '';
  readonly      name: string      = '';
  readonly     price: number      =  0;
  readonly      desc: string      = '';
  readonly  category: string      = '';
  readonly    images: ProdImage[] = [];
  readonly createdAt: string      = new Date().toISOString();
               views: number      =  0;

  private static getDb() {
    return client.db().collection<ProductDB>("products");
  }

  private static serialize(products: ProductDB[]) {
    return products.map((product) => ({ ...product, _id: product._id.toString() }));
  }

  private static sortBy(sort: string): Record<string, 1 | -1> {
    if (sort ===  "price") return { price:  1 };
    if (sort === "-price") return { price: -1 };
    if (sort ===  "views") return { views: -1 };
    if (sort ===   "name") return {  name:  1 };
    return { createdAt: -1 };
  }

  static async getAll(sort: string = "") {
    const sortBy = this.sortBy(sort);
    const products = await this.getDb().find().sort(sortBy).toArray();
    return this.serialize(products);
  }

  static async getByCategory(category: string, sort: string) {
    const sortBy = this.sortBy(sort);
    const products = await this.getDb().find({ category }).sort(sortBy).toArray();
    return this.serialize(products);
  }

  static async findById(prodId: string) {
    if (!ObjectId.isValid(prodId)) return null;
    try {
      const _id = new ObjectId(prodId);
      const product = await this.getDb().findOne({ _id });
      return product ? { ...product, _id: product._id.toString() } : null;
    } catch {
      return null;
    }
  }

  static async getFeatured() {
    const products = await this.getDb()
      .find()
      .sort({ views: -1, createdAt: -1 })
      .limit(3)
      .toArray();
    return this.serialize(products);
  }
}
