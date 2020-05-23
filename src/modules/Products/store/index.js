import actions from "./products.actions";
import mutations from "./products.mutations";
import getters from "./products.getters";
import state from "./products.state";
// make our modules namespaced to avoid method name conflicts
const namespaced = true;

const products = {
  namespaced,
  getters,
  mutations,
  actions,
  state
};

export default products;
