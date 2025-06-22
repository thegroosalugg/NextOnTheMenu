import { MongoClient } from "mongodb";

declare global {
  // Augment the NodeJS.Global interface to include _mongoClient
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}
