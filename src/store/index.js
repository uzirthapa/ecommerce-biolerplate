import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//import modules
import profile from "@/modules/Profile/store";
import auth from "@/modules/Auth/store";
import products from "@/modules/Products/store";
import cart from "@/modules/Cart/store";
import payment from "@/modules/Payment/store";
import base from "@/Base/store"

import { version } from "../../package.json";

const state = {
  version: ""
};
const getters = {};
const mutations = {
  initialiseStore(state) {
    // Check if the ID exists
    if (localStorage.getItem("store")) {
      let store = JSON.parse(localStorage.getItem("store"));

      if (store.version == version) {
        this.replaceState(Object.assign(state, store));
      } else {
        state.version = version;
      }
    }
  }
};
const actions = {};

export default new Vuex.Store({
  modules: {
    profile,
    auth,
    products,
    cart,
    payment,
    base
  },
  state,
  getters,
  actions,
  mutations
});
