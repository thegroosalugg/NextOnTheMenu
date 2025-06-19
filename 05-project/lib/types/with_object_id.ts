import { ObjectId } from "mongodb";

export type WithObjectId<T> = Omit<T, "_id"> & { _id: ObjectId };
