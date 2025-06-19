import client from "@/lib/mongo/mongodb";
import { ObjectId } from "mongodb";
import Product from "./product";
import { WithObjectId } from "@/lib/types/with_object_id";
import { AdjustByOne } from "@/lib/types/adjust_by_one";

type CartItem = { _id: Product["_id"]; quantity: number };
type CartDB = {
       _id: ObjectId;
  products: WithObjectId<CartItem>[];
};

export default class Cart {
       _id!: string;
  products!: CartItem[];

  private static getDb() {
    return client.db().collection<CartDB>("cart");
  }

  private static serialize(cart: CartDB) {
    const _id = cart._id.toString();
    const products = cart.products.map((product) => ({
      ...product,
             _id: product._id.toString(),
    }));
    return { _id, products };
  }

  private static async createCart(product: Product, quantity: AdjustByOne ) {
    const products = [];           // ObjId pre-validated by Product.findById()
    if (quantity > 0) products.push({ _id: new ObjectId(product._id), quantity: 1 });
    const cart = { _id: new ObjectId(), products };
    await this.getDb().insertOne(cart);
    return this.serialize(cart);
  }

  static async update(
      prodId: string,
     cartId?: string,
    quantity: AdjustByOne = 1
  ): Promise<Cart | void> {
    try {
      const product = await Product.findById(prodId); // throws if prodId invalid as ObjId
      if (!product) return;
      if (!cartId || !ObjectId.isValid(cartId)) return await this.createCart(product, quantity);

      const _id = new ObjectId(cartId);
      const cart = await this.getDb().findOne({ _id });
      if (!cart) return await this.createCart(product, quantity);

      const index = cart.products.findIndex(({ _id }) => _id.toString() === product._id);
      let cartItem = cart.products[index];
      const prodObjId = new ObjectId(prodId);

      if (cartItem) {
        cartItem.quantity += quantity;
        if (cartItem.quantity <= 0) {
          await this.getDb().updateOne({ _id }, { $pull: { products: cartItem } });
          cart.products.splice(index, 1);
        } else {
          await this.getDb().updateOne(
            { _id, "products._id": prodObjId },
            { $inc: { "products.$.quantity": quantity } }
          );
          cart.products[index] = cartItem;
        }
      } else if (quantity > 0) {
        cartItem = { _id: prodObjId, quantity: 1 };
        await this.getDb().updateOne({ _id }, { $push: { products: cartItem } });
        cart.products.unshift(cartItem);
      }

      return this.serialize(cart);
    } catch (error) {
      console.log("Cart.update", error);
    }
  }
}
