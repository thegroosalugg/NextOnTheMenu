import client from "@/lib/mongo/mongodb";
const db = client.db();
const products = db.collection("products");

const initialProducs = [
  {
        name: "Beige Urban Backpack",
       price: 39.99,
        desc: "Compact and functional for daily use.",
    category: "backpack",
      images: [{ src: "/backpack_beige.png", color: "beige" }],
  },

  {
        name: "Black Traveler Backpack",
       price: 59.99,
        desc: "Spacious design ideal for travel.",
    category: "backpack",
      images: [{ src: "/backpack_black_01.png", color: "black" }],
  },

  {
        name: "Black Sport Backpack",
       price: 44.99,
        desc: "Lightweight with breathable padding.",
    category: "backpack",
      images: [{ src: "/backpack_black_02.png", color: "black" }],
  },

  {
        name: "Leather Backpack",
       price: 89.99,
        desc: "Sleek black leather design for a premium look.",
    category: "backpack",
      images: [{ src: "/backpack_leather_black.png", color: "black" }],
  },
  {
        name: "Tweed Overcoat",
       price: 179.99,
        desc: "Warm and elegant tweed fabric with grainy texture.",
    category: "coat",
      images: [{ src: "/coat_tweed_grey.png", color: "grey" }],
  },
  {
        name: "Pro Headphones",
       price: 99.99,
        desc: "High-quality audio for everyday use.",
    category: "headphones",
      images: [
      { src: "/headphones_black_01.png", color: "black" },
      { src: "/headphones_blue.png",     color: "blue"  },
      { src: "/headphones_green.png",    color: "green" },
    ],
  },
  {
        name: "Classic Black Headphones",
       price: 79.99,
        desc: "Comfortable fit with clear sound.",
    category: "headphones",
      images: [{ src: "/headphones_black_02.png", color: "black" }],
  },
  {
        name: "Classic Hoodie",
       price: 39.99,
        desc: "Comfortable cotton blend, perfect for everyday wear.",
    category: "hoodie",
      images: [
      { src: "/hoodie_black.png",  color: "black"  },
      { src: "/hoodie_beige.png",  color: "beige"  },
      { src: "/hoodie_yellow.png", color: "yellow" },
      { src: "/hoodie_green.png",  color: "green"  },
    ],
  },

  {
        name: "Varsity Style Jacket",
       price: 74.99,
        desc: "Streamlined black jacket with a classic casual silhouette.",
    category: "jacket",
      images: [{ src: "/jacket_sport_black.png", color: "black" }],
  },

  {
        name: "Track Zip Jacket",
       price: 74.99,
        desc: "Slim-fit white jacket with a high zip-up collar.",
    category: "jacket",
      images: [{ src: "/jacket_sport_white.png", color: "white" }],
  },

  {
        name: "Denim Utility Jacket",
       price: 84.99,
        desc: "Functional design with rugged blue denim construction.",
    category: "jacket",
      images: [{ src: "/jacket_denim_blue.png", color: "blue" }],
  },

  {
        name: "Denim Street Jacket",
       price: 84.99,
        desc: "Black washed denim with a modern streetwear cut.",
    category: "jacket",
      images: [{ src: "/jacket_denim_black.png", color: "black" }],
  },
  {
        name: "Slim Fit Tee",
       price: 27.99,
        desc: "Streamlined athletic-style cotton T-shirt.",
    category: "tshirt",
      images: [
      { src: "/tshirt_black_01.png", color: "black" },
      { src: "/tshirt_green.png",    color: "green" },
    ],
  },

  {
        name: "Everyday Tee",
       price: 22.99,
        desc: "Comfortable regular-fit tee for daily wear.",
    category: "tshirt",
      images: [
      { src: "/tshirt_white.png",    color: "white" },
      { src: "/tshirt_beige.png",    color: "beige" },
      { src: "/tshirt_red.png",      color: "red"   },
      { src: "/tshirt_black_02.png", color: "black" },
    ],
  },
];

const count = await products.countDocuments();

if (count === 0) await products.insertMany(initialProducs);

const init = {};
export default init;
