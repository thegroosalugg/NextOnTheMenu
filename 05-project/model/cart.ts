import client from "@/lib/mongo/mongodb";
import { ObjectId } from "mongodb";
import CartItem, { CartItemDB } from "./cart_item";
import { Delta } from "@/lib/types/delta";
import Product from "./product";

interface CartUpdateInput<T> {
  cartId: T;
    item: CartItemDB;
   delta: Delta;
}

type CartDB = {
    _id: ObjectId;
  items: CartItemDB[];
};

export default class Cart {
    _id!: string;
  token?: string;
  items!: CartItem[];

  private static getDb() {
    return client.db().collection<CartDB>("cart");
  }

  private static async updateDbQuantity({ cartId, item, delta }: CartUpdateInput<ObjectId>) {
    const { _id, color, size } = item;
    await this.getDb().updateOne(
      { _id: cartId, items: { $elemMatch: { _id, color, size } } }, // must match all 3 props
      { $inc: { "items.$.quantity": delta } }
    );
  }

  private static async patchDbItems({ cartId, item, delta }: CartUpdateInput<ObjectId>) {
    const action = delta === 1 ? "$push" : "$pull";
    await this.getDb().updateOne({ _id: cartId }, { [action]: { items: item } });
  }

  private static async createCart(delta: Delta, item: CartItemDB) {
    if (delta !== 1) return;
    const cart: CartDB = { _id: new ObjectId(), items: [item] };
    await this.getDb().insertOne(cart);
    return cart._id.toString();
  }

  private static matchItem(cart: CartDB, item: CartItemDB) {
    return cart.items.find(
      ({ _id, color, size }) =>
        _id.toString() === item._id.toString() &&
                 color === item.color          &&
                  size === item.size
    );
  }

  static async update({
    cartId,
      item,
     delta,
  }: CartUpdateInput<string | undefined>): Promise<Cart["_id"] | void> {
    try {
      const createCart = async () => this.createCart(delta, item);
      if (!cartId || !ObjectId.isValid(cartId)) return await createCart();

      const cart = await this.getDb().findOne({ _id: new ObjectId(cartId) });
      if (!cart) return await createCart();

      const  foundItem = this.matchItem(cart, item);
      const updateData = { cartId: cart._id, item, delta };
      const patchItems = async () => this.patchDbItems(updateData);

      if (foundItem) {
        foundItem.quantity += delta;

        if (foundItem.quantity <= 0) await patchItems(); // remove
        else await this.updateDbQuantity(updateData); // quantity +1|-1

      } else await patchItems(); // add

      return cart._id.toString();
    } catch (error) {
      console.log("Cart.update", error);
    }
  }

  static async load(cartId?: string) {
    try {
      if (!cartId || !ObjectId.isValid(cartId)) return;
      const _id = new ObjectId(cartId);
      return await this.getDb().findOne({ _id });
    } catch (error) {
      console.log("Cart.load", error);
    }
  }

  static async merge(cart: CartDB, products?: Product[]) {
    const productMap = new Map(
      products?.map((product) => [product._id.toString(), product])
    );

    const items = cart.items.reduce<CartItem[]>((acc, item) => {
      const product = productMap.get(item._id.toString());
      if (product) acc.push(CartItem.populate(item, product));
      return acc;
    }, []).reverse();

    return { _id: cart._id.toString(), items };
  }

  static async token({
        cartId,
         token,
    deleteCart,
  }: {
         cartId: string;
          token: string;
    deleteCart?: boolean;
  }) {
    try {
      if (!cartId || !ObjectId.isValid(cartId)) return;
      const _id = new ObjectId(cartId);

      if (deleteCart) {
        return await this.getDb().deleteOne({ _id, token });
      } else {
        await this.getDb().updateOne({ _id }, { $set: { token } });
      }
    } catch (error) {
      console.log("Cart.token", error);
    }
  }
}
