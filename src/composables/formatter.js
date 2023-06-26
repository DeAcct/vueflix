// export const numberFormatter = {
//   methods: {
//     numberFormatter(origin, digits = 10) {
//       let result = String(origin);
//       for (let i = digits; i >= 10; i /= 10) {
//         if (origin < i) {
//           result = `0${result}`;
//         } else {
//           return result;
//         }
//       }
//       return result;
//     },
//   },
// };

export function useDigit(origin, digits = 10) {
  let result = String(origin);
  for (let i = digits; i >= 10; i /= 10) {
    if (origin < i) {
      result = `0${result}`;
    } else {
      return result;
    }
  }
  return result;
}
