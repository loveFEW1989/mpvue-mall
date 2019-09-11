// 组装模块并导出 store 的地方
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'

import getters from './getters'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
 state,
 mutations,

 getters,
 plugins: [
  createPersistedState({
      storage: {
          getItem: key => wx.getStorageSync(key),
          setItem: (key, value) => wx.setStorageSync(key, value),
          removeItem: key => {}
      }
  })
]

});
