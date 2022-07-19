import { getCurrentInstance } from 'vue'
import VueRouter from 'vue-router'

export function useRouter(): VueRouter {
  const proxy = getCurrentInstance()?.proxy

  return proxy?.$router
}
