import { Size } from "@/lib/types/size";
import Product from "./product";
import { ObjectId } from "mongodb";
import { ProdImage } from "@/lib/types/prod_image";

export interface CartItemInput {
   product: Product;
    color?: string | null;
     size?: string | null;
}

export default class CartItem {
       _id!: Product["_id"] | ObjectId;
     image!: ProdImage;
      size?: Size;
  quantity!: number;

  static create({
    product,
    color,
    size: selected,
  }: CartItemInput) {
    const   _id = new ObjectId(product._id);
    const image = product.images.find((  img   ) => img.color === color) ?? product.images[0];
    const  size = product.sizes?.find((prodSize) => prodSize === selected) ?? product.sizes?.[0];
    return { _id, image, size, quantity: 1 };
  }
}
