import { getCurrentInstance } from 'vue';
import type { Route } from 'vue-router';

export function useRoute(): Route {
  const proxy = getCurrentInstance()?.proxy;

  return proxy?.$route;
}
