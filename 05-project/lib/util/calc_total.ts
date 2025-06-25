import CartItem from "@/model/cart_item";

export const calcTotal = (items: CartItem[] = []) =>
  items.reduce(
    (total, { price, quantity }) => {
      total.price += quantity * price;
      total.quantity += quantity;
      return total;
    },
    { price: 0, quantity: 0 }
  );
