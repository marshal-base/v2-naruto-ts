import { Store } from 'vuex';
import { IStore } from '@/types/stores/sales';
import { ESetters, EMutations } from '@/const/sales/enums';

export default function getAccountBaseData(store: Store<IStore>): void {
  const name = store.getters[ESetters.GET_USER_NAME];

  store.commit(EMutations.UPDATE_HOME_USER_NAME, name);
}
