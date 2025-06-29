import { Size } from "@/lib/types/size";
import Product from "./product";
import { ObjectId } from "mongodb";
import { WithObjectId } from "@/lib/types/with_object_id";
import { ProdImage } from "@/lib/types/prod_image";

interface CartItemInput {
   product: Product;
    color?: string | null;
     size?: string | null;
}
type ProductKeys = "name" | "desc" | "price" | "category";
type ProductSnapshot = Pick<Product, ProductKeys>;
export type CartItemDB = Omit<WithObjectId<CartItem>, ProductKeys | "image">;

export default class CartItem implements ProductSnapshot {
       _id!: string;
     color!: string;
      size?: Size | null;
  quantity!: number;
     image!: ProdImage;
      name!: string;
      desc!: string;
     price!: number;
  category!: string;

  private static getValue<T>(arr: T[], match: unknown, key?: keyof T): T {
    return arr.find((item) => (key ? item[key] : item) === match) ?? arr[0];
  }

  static create({
    product,
      color: $color,
       size: $size,
  }: CartItemInput): CartItemDB {
    const _id = new ObjectId(product._id);
    const { images, sizes } = product;

    const color = this.getValue(images, $color, "color").color;
    const size = sizes ? this.getValue(sizes, $size) : null;
    return { _id, color, size, quantity: 1 };
  }

  static populate(item: CartItemDB, product: Product): CartItem {
    const { _id, name, desc, price, images, category } = product;
    const image = this.getValue(images, item.color, "color");
    return { ...item, name, desc, price, image, category, _id: _id.toString() };
  }
}
