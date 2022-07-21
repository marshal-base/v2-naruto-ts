import { getCurrentInstance } from 'vue';
import { Store } from 'vuex';

import { IStore } from '@/types/stores/sales';

export function useStore(): Store<IStore> {
  const proxy = getCurrentInstance()?.proxy;

  return proxy?.$store;
}
