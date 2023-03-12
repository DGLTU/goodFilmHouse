import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    // eslint-disable-next-line no-plusplus
    count.value++;
  }

  return { count, doubleCount, increment };
});
