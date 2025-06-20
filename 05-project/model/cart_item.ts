import { Size } from "@/lib/types/size";
import Product from "./product";
import { ObjectId } from "mongodb";
import { ProdImage } from "@/lib/types/prod_image";
import { WithObjectId } from "@/lib/types/with_object_id";

interface CartItemInput {
   product: Product;
    color?: string | null;
     size?: string | null;
}

export type CartItemDB = WithObjectId<CartItem>;

export default class CartItem {
       _id!: string;
     image!: ProdImage;
      size?: Size;
  quantity!: number;

  static create({
    product,
    color,
    size: selected,
  }: CartItemInput): CartItemDB {
    const   _id = new ObjectId(product._id);
    const image = product.images.find((  img   ) => img.color === color) ?? product.images[0];
    const  size = product.sizes?.find((prodSize) => prodSize === selected) ?? product.sizes?.[0];
    return { _id, image, size, quantity: 1 };
  }
}
