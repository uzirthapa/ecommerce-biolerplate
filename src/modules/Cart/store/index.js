import actions from "./cart.actions";
import mutations from "./cart.mutations";
import getters from "./cart.getters";
import state from "./cart.state";
// make our modules namespaced to avoid method name conflicts
const namespaced = true;

const cart = {
  namespaced,
  getters,
  mutations,
  actions,
  state
};

export default cart;
