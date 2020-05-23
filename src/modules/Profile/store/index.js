import actions from "./profile.actions";
import mutations from "./profile.mutations";
import getters from "./profile.getters";
import state from "./profile.state";

// make our modules namespaced to avoid method name conflicts
const namespaced = true;

const profile = {
  namespaced,
  getters,
  actions,
  mutations,
  state
};

export default profile;
