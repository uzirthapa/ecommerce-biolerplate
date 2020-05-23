import Vue from "vue";

const mutations = {
  updateAuthStatus(state, value) {
    Vue.set(state.status, "authenticated", value);
  },
  updateStatus(state, value) {
    Vue.set(state.status, "loading", value);
  },
  updateUser(state, value) {
    Vue.set(state, "user", value);
  },
  updateLoginError(state, value) {
    state.loginError = value;
  },
  updateRegistrationError(state, value) {
    state.registrationError = value;
  }
};

export default mutations;
