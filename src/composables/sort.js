const TIME_ORDER = ["year", "month", "date", "hour", "min", "sec"];

export function useTimeSort(arr, key) {
  return [...arr].sort((a, b) => TIME_ORDER.reduce((acc, sortBy) => {
    if (a[key][sortBy] > b[key][sortBy]) {
      return -1;
    }
    if (a[key][sortBy] < b[key][sortBy]) {
      return 1;
    }
    return 0;
  }, 0));
}
