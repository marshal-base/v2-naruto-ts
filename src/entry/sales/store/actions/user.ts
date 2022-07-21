import { ActionTree } from 'vuex';

import { EActions, EMutations } from '@/const/sales/enums';
import { IStore } from '@/types/stores/sales';

const actions: ActionTree<IStore, IStore> = {
  [EActions.update_user_name]({ commit }, name): void {
    commit(EMutations.UPDATE_HOME_USER_NAME, name);
  },
};

export default actions;
