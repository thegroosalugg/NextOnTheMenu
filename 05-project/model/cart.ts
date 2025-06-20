import client from "@/lib/mongo/mongodb";
import { ObjectId } from "mongodb";
import CartItem, { CartItemDB } from "./cart_item";
import { Delta } from "@/lib/types/delta";

type CartDB = {
    _id: ObjectId;
  items: CartItemDB[];
};

export default class Cart {
    _id!: string;
  items!: CartItem[];

  private static getDb() {
    return client.db().collection<CartDB>("cart");
  }

  private static async updateDbQuantity(cartId: ObjectId, item: CartItemDB, delta: Delta) {
    const { _id, image, size } = item;
    await this.getDb().updateOne(
      // must match all 3 props - mongo can match image objects directly
      { _id: cartId, items: { $elemMatch: { _id, image, size } } },
      { $inc: { "items.$.quantity": delta } }
    );
  }

  private static async patchDbItems(_id: ObjectId, item: CartItemDB, delta: Delta) {
    const action = delta === 1 ? "$push" : "$pull";
    await this.getDb().updateOne({ _id }, { [action]: { items: item } });
  }

  private static serialize(cart: CartDB) {
    const _id = cart._id.toString();
    const items = cart.items.map((item) => ({ ...item, _id: item._id.toString() }));
    return { _id, items };
  }

  private static async createCart(delta: Delta, item: CartItemDB) {
    if (delta !== 1) return;
    const cart: CartDB = { _id: new ObjectId(), items: [item] };
    await this.getDb().insertOne(cart);
    return this.serialize(cart);
  }

  private static getItemIndex(cart: CartDB, item: CartItemDB): number {
    return cart.items.findIndex(
      ({ _id, image, size }) =>
        _id.toString() === item._id.toString() &&
           image.color === item.image.color    &&
                  size === item.size
    );
  }

  static async update({
    cartId,
      item,
     delta,
  }: {
    cartId?: string;
       item: CartItemDB;
      delta: Delta;
  }): Promise<Cart | void> {
    try {
      if (!cartId || !ObjectId.isValid(cartId)) return await this.createCart(delta, item);

      const _id = new ObjectId(cartId);
      const cart = await this.getDb().findOne({ _id });
      if (!cart) return await this.createCart(delta, item);

      const index = this.getItemIndex(cart, item);
      const foundItem = cart.items[index];

      if (foundItem) {
        cart.items[index].quantity += delta;

        if (cart.items[index].quantity <= 0) {
          await this.patchDbItems(cart._id, item, delta);
          cart.items.splice(index, 1);
        } else {
          await this.updateDbQuantity(cart._id, item, delta);
        }
      } else {
        await this.patchDbItems(cart._id, item, delta);
        cart.items.unshift(item);
      }

      return this.serialize(cart);
    } catch (error) {
      console.log("Cart.update", error);
    }
  }

  static async load(cartId?: string): Promise<Cart| void> {
    try {
      if (!cartId || !ObjectId.isValid(cartId)) return;
      const _id = new ObjectId(cartId);
      const cart = await this.getDb().findOne({ _id });
      if (!cart) return;
      return this.serialize(cart);
    } catch (error) {
      console.log("Cart.load", error);
    }
  }
}
