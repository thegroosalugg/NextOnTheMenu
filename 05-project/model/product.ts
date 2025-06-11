import client from "@/lib/mongo/mongodb";

type ProdImage = { src: string, color: string };

type Category = "backpack" | "headphones" | "hoodie" | "jacket" | "coat" | "tshirt";

export default class Product {
       _id: string;
      name: string;
     price: number;
      desc: string;
  category: Category;
    images: ProdImage[];

  constructor({
         _id,
        name,
       price,
        desc,
    category,
      images,
  }: {
         _id: string;
        name: string;
       price: number;
        desc: string;
    category: Category;
      images: ProdImage[];
  }) {
    this._id      = _id;
    this.name     = name;
    this.price    = price;
    this.desc     = desc;
    this.category = category;
    this.images   = images;
  }

  private static getDb() {
    return client.db().collection("products");
  }

  static async getAll() {
    return await this.getDb().find().toArray();
  }
}
