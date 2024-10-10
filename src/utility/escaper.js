import { toValue } from "vue";

export function useEscaper(target) {
  const _target = toValue(target);
  if (typeof _target !== "string") {
    return "";
  }
  return _target.replaceAll(/:|\./g, "_").replaceAll(/\?/g, "");
}
