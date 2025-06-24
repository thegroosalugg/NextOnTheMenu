import client from "@/lib/mongo/mongodb";
import { ProdImage } from "@/lib/types/prod_image";
import { Size } from "@/lib/types/size";
import { WithObjectId } from "@/lib/types/with_object_id";
import { ObjectId } from "mongodb";

export interface FetchProdOptions {
      sort?: string;
     match?: { _id: ObjectId }[];
  category?: string;
    search?: string;
}

type ProductDB = WithObjectId<Product>;

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

  private static sortBy(sort?: string): Record<string, 1 | -1> {
    if (sort ===  "price") return { price:  1 };
    if (sort === "-price") return { price: -1 };
    if (sort ===  "views") return { views: -1 };
    if (sort ===   "name") return {  name:  1 };
    return { createdAt: -1 };
  }

  static async getAll({
        sort,
       match,
    category,
      search,
  }: FetchProdOptions = {}) {
    const sortBy = this.sortBy(sort);
    let query = {};

         if (category) query = { category };
    else if ( match  ) query = { _id: { $in: match.map(({ _id }) => _id) } };
    else if ( search ) {
      const regex = new RegExp(search, "i");
      query = {
        $or: [{ name: regex }, { description: regex }, { category: regex }],
      };
    }

    try {
      const products = await this.getDb().find(query).sort(sortBy).toArray();
      return this.serialize(products);
    } catch (error) {
      console.log("Product.getAll", error);
    }
  }

  static async findById(prodId: string) {
    try {
      const _id = this.toObjectId(prodId);
      const product = await this.getDb().findOne({ _id });
      return product ? { ...product, _id: product._id.toString() } : null;
    } catch (error) {
      console.log("Product.findById", error);
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
      console.log("Product.getFeatured", error);
    }
  }

  static async updateViews(prodId: string) {
    try {
      const _id = this.toObjectId(prodId);
      await this.getDb().updateOne({ _id }, { $inc: { views: 1 } });
    } catch (error) {
      console.log("Product.updateViews", error);
    }
  }
}
