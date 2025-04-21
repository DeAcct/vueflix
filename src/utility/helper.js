import { where } from "firebase/firestore";

export default function objToQuery(obj, fn) {
  if (!obj) throw new Error("objToQuery: obj is required");
  if (typeof obj !== "object")
    throw new Error("objToQuery: obj must be an object");

  const query = Object.keys(obj)
    .map((key) => {
      if (!obj[key]) return null;
      console.log(`${key}:`, obj[key]);
      return where(key, "==", obj[key]);
    })
    .filter((item) => item !== null);

  console.log(query);
  return query;
}
