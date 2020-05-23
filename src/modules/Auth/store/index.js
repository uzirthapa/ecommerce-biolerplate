import actions from "./auth.actions";
import mutations from "./auth.mutations";
import getters from "./auth.getters";
import state from "./auth.state";
// make our modules namespaced to avoid method name conflicts
const namespaced = true;

const auth = {
  namespaced,
  getters,
  mutations,
  actions,
  state
};

export default auth;
