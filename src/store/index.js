// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';
// import VueAxios from 'vue-axios';

// Vue.use(Vuex);
// Vue.use(VueAxios, axios);

// Vue.axios.defaults.baseURL = 'https://newsapi.org/v2/';

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   },
// });

import Vue from 'vue';

export const store = Vue.observable({
  data: [],
});
export const mutations = {
  setData(payload) {
    store.data = payload;
  },
};
