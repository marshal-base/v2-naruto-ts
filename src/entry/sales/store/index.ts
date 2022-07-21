import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { IStore } from '@/types/stores/sales';

import profileState from './state';
import profileActions from './actions';
import profileMutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const store: StoreOptions<IStore> = {
  state: Object.assign({}, profileState),
  actions: Object.assign({}, profileActions),
  mutations: Object.assign({}, profileMutations),
  getters: Object.assign({}, getters),
};

export default new Vuex.Store<IStore>(store);
