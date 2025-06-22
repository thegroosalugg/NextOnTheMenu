import client from "@/lib/mongo/mongodb";

const db = client.db();
const collection = db.collection("categories");

const categories = [
  { path: "bags",       name: "Bags"       },
  { path: "technology", name: "Technology" },
  { path: "hoodies",    name: "Hoodies"    },
  { path: "jackets",    name: "Jackets"    },
  { path: "coats",      name: "Coats"      },
  { path: "shirts",     name: "Shirts"     },
];

const count = await collection.countDocuments();

if (count === 0) {
  await collection.insertMany(categories);
}

const init = {};
export default init;
