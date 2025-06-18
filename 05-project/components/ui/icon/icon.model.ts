// <typeGuard> component use & viewBox 'width' in-one-place
export default class Icon {
  static       Search = 24;
  static       Shield = 24;
  static          Key = 18;
  static  ShoppingBag = 20;
  static ShoppingCart = 24;
  static    Hamburger = 24;
  static       Vercel = 24;
  static  ChevronDown = 24;
  static    ChevronUp = 24;
  static        Cross = 24;
}

export type IconType = keyof Omit<typeof Icon, 'prototype'>
