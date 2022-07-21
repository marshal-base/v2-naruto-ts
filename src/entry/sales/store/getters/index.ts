import { GetterTree } from 'vuex';

import { ESetters } from '@/const/sales/enums';
import { ELocationStorage } from '@/types/index';
import locale from '@/utils/storage';
import { IStore } from '@/types/stores/sales';

const getters: GetterTree<IStore, IStore> = {
  [ESetters.GET_USER_NAME](state) {
    if (!state.user.name) {
      state.user.name = locale(ELocationStorage.L_USER_NAME);
    }

    return state.user.name;
  },
};

export default getters;
