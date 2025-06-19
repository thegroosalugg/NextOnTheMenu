import Product from "./product";

type CartItem = { _id: Product["_id"]; quantity: number };

export default class Cart {
       _id!: string;
  products!: CartItem[];
}
