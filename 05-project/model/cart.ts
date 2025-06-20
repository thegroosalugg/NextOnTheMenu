import client from "@/lib/mongo/mongodb";
import { ObjectId } from "mongodb";
import CartItem from "./cart_item";

type CartDB = {
    _id: ObjectId;
  items: CartItem[];
};

export default class Cart {
    _id!: string;
  items!: CartItem[];

  private static getDb() {
    return client.db().collection<CartDB>("cart");
  }

  private static serialize(cart: CartDB) {
    const _id = cart._id.toString();
    const items = cart.items.map((item) => ({ ...item, _id: item._id.toString() }));
    return { _id, items };
  }

  private static async createCart(item?: CartItem) {
    const items = [];
    if (item) items.push(item);
    const cart = { _id: new ObjectId(), items };
    await this.getDb().insertOne(cart);
    return this.serialize(cart);
  }

  static async AddItem({ item, cartId }: { item: CartItem; cartId?: string }) {
    try {
      if (!cartId || !ObjectId.isValid(cartId)) return await this.createCart(item);

      const _id = new ObjectId(cartId);
      const cart = await this.getDb().findOne({ _id });
      if (!cart) return await this.createCart(item);

      const index = cart.items.findIndex(
        ({ _id, image, size }) =>
          _id.toString() === item._id.toString() &&
             image.color === item.image.color    &&
                    size === item.size
      );

      const foundItem = cart.items[index];
      if (foundItem) {
        await this.getDb().updateOne(
          { _id, "items._id": foundItem._id  },
          { $inc: { "items.$.quantity": 1 } }
        );
        cart.items[index].quantity += 1;
      } else {
        await this.getDb().updateOne({ _id }, { $push: { items: item } });
        cart.items.unshift(item);
      }

      return this.serialize(cart);
    } catch (error) {
      console.log("Cart.AddItem", error);
    }
  }

  static async RemoveItem({ item, cartId }: { item: CartItem; cartId?: string }) {
    try {
      if (!cartId || !ObjectId.isValid(cartId)) return;

      const _id = new ObjectId(cartId);
      const cart = await this.getDb().findOne({ _id });
      if (!cart) return;

      const index = cart.items.findIndex(
        ({ _id, image, size }) =>
          _id.toString() === item._id.toString() &&
             image.color === item.image.color    &&
                    size === item.size
      );

      const foundItem = cart.items[index];
      if (foundItem) {
        cart.items[index].quantity -= 1;
        if (cart.items[index].quantity <= 0) {
          await this.getDb().updateOne({ _id }, { $pull: { items: foundItem } });
          cart.items.splice(index, 1);
        } else {
          await this.getDb().updateOne(
            { _id, "items._id": foundItem._id },
            { $inc: { "items.$.quantity": -1 } }
          );
        }
      }

      return this.serialize(cart);
    } catch (error) {
      console.log("Cart.RemoveItem", error);
    }
  }
}
