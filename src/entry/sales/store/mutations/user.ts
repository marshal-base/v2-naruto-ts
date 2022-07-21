import { MutationTree } from 'vuex';

import { local } from '@/utils/storage';
import { EMutations } from '@/const/sales/enums';
import { IStore } from '@/types/stores/sales';
import { ELocationStorage } from '@/types';

const mutations: MutationTree<IStore> = {
  [EMutations.UPDATE_HOME_USER_NAME](state: IStore, name: string): void {
    state.user.name = name;
    local(ELocationStorage.L_USER_NAME, name);
  },
};

export default mutations;
