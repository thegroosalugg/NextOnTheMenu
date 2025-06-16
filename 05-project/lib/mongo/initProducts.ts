import client from "@/lib/mongo/mongodb";
const db = client.db();
const collection = db.collection("products");

const products = [
  {
         name: "Beige Urban Backpack",
        price: 39.99,
         desc: "Compact and functional for daily use.",
     category: "bags",
    createdAt: "2024-03-15",
        views: 1000,
       images: [{ src: "backpack_beige.png", color: "beige" }],
  },

  {
         name: "Black Traveler Backpack",
        price: 44.99,
         desc: "Spacious design ideal for travel.",
     category: "bags",
    createdAt: "2024-09-15",
        views: 200,
       images: [{ src: "backpack_black_01.png", color: "black" }],
  },

  {
         name: "Black Sport Backpack",
        price: 59.99,
         desc: "Lightweight with breathable padding.",
     category: "bags",
    createdAt: "2024-06-15",
        views: 50,
       images: [{ src: "backpack_black_02.png", color: "black" }],
  },

  {
         name: "Leather Backpack",
        price: 89.99,
         desc: "Sleek black leather design for a premium look.",
     category: "bags",
    createdAt: "2024-01-15",
        views: 500,
       images: [{ src: "backpack_leather_black.png", color: "black" }],
  },
  {
         name: "Tweed Overcoat",
        price: 179.99,
         desc: "Warm and elegant tweed fabric with grainy texture.",
     category: "coats",
    createdAt: "2024-12-01",
        views: 550,
       images: [{ src: "coat_tweed_grey.png", color: "grey" }],
  },
  {
         name: "Pro Headphones",
        price: 99.99,
         desc: "High-quality audio for everyday use.",
     category: "technology",
    createdAt: "2024-05-01",
        views: 900,
       images: [
      { src: "headphones_black_01.png", color: "black" },
      { src: "headphones_blue.png",     color: "blue"  },
      { src: "headphones_green.png",    color: "green" },
    ],
  },
  {
         name: "Classic Black Headphones",
        price: 79.99,
         desc: "Comfortable fit with clear sound.",
     category: "technology",
    createdAt: "2024-11-01",
        views: 400,
       images: [{ src: "headphones_black_02.png", color: "black" }],
  },
  {
         name: "Classic Hoodie",
        price: 39.99,
         desc: "Comfortable cotton blend, perfect for everyday wear.",
     category: "hoodies",
    createdAt: "2024-04-01",
        views: 600,
       images: [
      { src: "hoodie_black.png",  color: "black"  },
      { src: "hoodie_beige.png",  color: "beige"  },
      { src: "hoodie_yellow.png", color: "yellow" },
      { src: "hoodie_green.png",  color: "green"  },
    ],
  },

  {
         name: "Varsity Style Jacket",
        price: 74.99,
         desc: "Streamlined black jacket with a classic casual silhouette.",
     category: "jackets",
    createdAt: "2024-09-01",
        views: 300,
       images: [{ src: "jacket_sport_black.png", color: "black" }],
  },

  {
         name: "Track Zip Jacket",
        price: 74.99,
         desc: "Slim-fit white jacket with a high zip-up collar.",
     category: "jackets",
    createdAt: "2024-03-01",
        views: 150,
       images: [{ src: "jacket_sport_white.png", color: "white" }],
  },

  {
         name: "Denim Utility Jacket",
        price: 84.99,
         desc: "Functional design with rugged blue denim construction.",
     category: "jackets",
    createdAt: "2024-02-01",
        views: 100,
       images: [{ src: "jacket_denim_blue.png", color: "blue" }],
  },

  {
         name: "Denim Street Jacket",
        price: 84.99,
         desc: "Black washed denim with a modern streetwear cut.",
     category: "jackets",
    createdAt: "2024-07-01",
        views: 250,
       images: [{ src: "jacket_denim_black.png", color: "black" }],
  },
  {
         name: "Slim Fit Tee",
        price: 27.99,
         desc: "Streamlined athletic-style cotton T-shirt.",
     category: "shirts",
    createdAt: "2024-06-01",
        views: 350,
       images: [
      { src: "tshirt_black_01.png", color: "black" },
      { src: "tshirt_green.png",    color: "green" },
    ],
  },

  {
         name: "Everyday Tee",
        price: 22.99,
         desc: "Comfortable regular-fit tee for daily wear.",
     category: "shirts",
    createdAt: "2024-01-01",
        views: 450,
       images: [
      { src: "tshirt_white.png",    color: "white" },
      { src: "tshirt_beige.png",    color: "beige" },
      { src: "tshirt_red.png",      color: "red"   },
      { src: "tshirt_black_02.png", color: "black" },
    ],
  },
];

const count = await collection.countDocuments();

if (count === 0) await collection.insertMany(products);

const init = {};
export default init;
