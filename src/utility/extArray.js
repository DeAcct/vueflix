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

export function gausArray(obj) {
  return new Proxy(obj, {
    get(target, index) {
      const _index = Number(index);

      if (isNaN(_index)) {
        throw new Error("숫자 인덱스만 가능합니다.");
      }

      // 인덱스가 순서대로 되어 있지 않은 경우 대비 정렬
      const indexes = Object.keys(target)
        .map(Number)
        .sort((a, b) => a - b);

      for (const index of indexes) {
        if (_index < index) {
          return { value: target[index], key: index };
        }
      }
    },
  });
}
