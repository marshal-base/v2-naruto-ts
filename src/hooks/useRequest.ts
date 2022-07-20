import { ref } from 'vue';
import type { Ref } from 'vue';

interface IReturn<P, D> {
  run: (p?: P) => Promise<D>;
  loading: Ref<boolean>;
  data: D;
}
/**
 * 统一处理api返回结果.
 *
 * @param asyncFunction
 * @rerurn Promise
 */
export function useRequest<P, D>(asyncFunction: (arg0: P) => Promise<D>): IReturn<P, D> {
  const loading = ref(false);
  const data = ref(null);

  const run = async (params?: P) => {
    loading.value = true;
    try {
      const result = await asyncFunction(params);
      data.value = result;
      return result;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    data,
    run,
  };
}
