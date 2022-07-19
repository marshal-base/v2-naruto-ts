import { getCurrentInstance } from 'vue'

export function useRoute() {
  const proxy = getCurrentInstance()?.proxy

  return proxy?.$route
}
