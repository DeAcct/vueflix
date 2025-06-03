import { toValue } from "vue";

export function deepReverse(arr, ...sortKeys) {
  const rawArr = toValue(arr);
  const reversedArr = [];

  if (!rawArr) return rawArr;

  for (let i = rawArr.length - 1; i >= 0; i--) {
    const item = rawArr[i];

    if (Array.isArray(item)) {
      reversedArr.push(deepReverse(item));
      continue; // Early return if item is an array
    }

    if (!sortKeys.length) {
      reversedArr.push(item);
      continue; // Early return if sortKeys is empty
    }

    if (typeof item === "object") {
      reversedArr.push({
        ...item,
        [sortKeys[0]]: deepReverse(item[sortKeys[0]], sortKeys.slice(1)),
      });
    }
  }

  return reversedArr;
}

export const switcher = (value) => {
  const toFn = (maybeFn) =>
    typeof maybeFn === "function" ? maybeFn : () => maybeFn;

  const cases = [];

  const chain = {
    case(predicate, actionOrValue) {
      cases.push({ predicate, action: toFn(actionOrValue) });
      return chain;
    },
    default(fallbackOrValue) {
      return (this._match?.action ?? toFn(fallbackOrValue))(value);
    },
    exec() {
      return this._match?.action(value);
    },
    get _match() {
      return cases.find(({ predicate }) => predicate(value));
    },
  };

  return chain;
};
