import { ref } from "vue";
export function useMockToggle() {
  const mock = ref(false);
  function mockToggle() {
    mock.value = !mock.value;
  }

  return { mock, mockToggle };
}
