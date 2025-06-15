import client from "@/lib/mongo/mongodb";

const db = client.db();
const collection = db.collection("categories");

const categories = [
  "backpack",
  "headphones",
  "hoodie",
  "jacket",
  "coat",
  "t-shirt"
];

const count = await collection.countDocuments();

if (count === 0) {
  await collection.insertMany(categories.map((name) => ({ name })));
}

const init = {};
export default init;
