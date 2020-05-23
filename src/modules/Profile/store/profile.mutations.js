import Vue from "vue";

const mutations = {
  updateProfile(state, value) {
    state.profile = value;
  },
  updateStatus(state, value) {
    Vue.set(state.status, "loading", value);
  }
};

export default mutations;
