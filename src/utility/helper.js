import { where, orderBy } from "firebase/firestore";

export function objToQuery(obj) {
  if (!obj) throw new Error("objToQuery: obj is required");
  if (typeof obj !== "object")
    throw new Error("objToQuery: obj must be an object");

  const query = Object.keys(obj)
    .map((key) => {
      if (!obj[key]) return null;
      return where(key, "==", obj[key]);
    })
    .filter((item) => item !== null);

  return query;
}

export function objToOrder(obj) {
  if (!obj) throw new Error("objToOrder: obj is required");
  if (typeof obj !== "object")
    throw new Error("objToOrder: obj must be an object");

  const order = Object.keys(obj)
    .map((key) => {
      if (!obj[key]) return null;
      return orderBy(key, obj[key]);
    })
    .filter((item) => item !== null);

  return order;
}
