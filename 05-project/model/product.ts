import client from "@/lib/mongo/mongodb";
import { ProdImage } from "@/lib/types/prod_image";
import { Size } from "@/lib/types/size";
import { ObjectId } from "mongodb";

type ProductDB = Omit<Product, "_id"> & { _id: ObjectId };

export default class Product {
  readonly       _id!: string;
  readonly      name!: string;
  readonly     price!: number;
  readonly      desc!: string;
  readonly  category!: string;
  readonly    images!: ProdImage[];
  readonly     sizes?: Size[]
  readonly createdAt!: string;
               views!: number;

  private static getDb() {
    return client.db().collection<ProductDB>("products");
  }

  private static serialize(products: ProductDB[]) {
    return products.map((product) => ({ ...product, _id: product._id.toString() }));
  }

  private static toObjectId(_id: string) {
    if (!ObjectId.isValid(_id)) throw new Error('Invalid ID');
    return new ObjectId(_id);
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
    try {
      const products = await this.getDb().find().sort(sortBy).toArray();
      return this.serialize(products);
    } catch (error) {
      console.log("getAll", error);
    }
  }

  static async getByCategory(category: string, sort: string) {
    const sortBy = this.sortBy(sort);
    try {
      const products = await this.getDb().find({ category }).sort(sortBy).toArray();
      return this.serialize(products);
    } catch (error) {
      console.log("getByCategory", error);
    }
  }

  static async findById(prodId: string) {
    try {
      const _id = this.toObjectId(prodId);
      const product = await this.getDb().findOne({ _id });
      return product ? { ...product, _id: product._id.toString() } : null;
    } catch (error) {
      console.log("findById", error);
    }
  }

  static async getFeatured() {
    try {
      const products = await this.getDb()
        .find()
        .sort({ views: -1, createdAt: -1 })
        .limit(3)
        .toArray();
      return this.serialize(products);
    } catch (error) {
      console.log("getFeatured", error);
    }
  }

  static async updateViews(prodId: string) {
    try {
      const _id = this.toObjectId(prodId);
      await this.getDb().updateOne({ _id }, { $inc: { views: 1 } });
    } catch (error) {
      console.log("updateViews", error);
    }
  }
}
