import actions from "./payment.actions";
import mutations from "./payment.mutations";
import getters from "./payment.getters";
import state from "./payment.state";
// make our modules namespaced to avoid method name conflicts
const namespaced = true;

const payment = {
  namespaced,
  getters,
  mutations,
  actions,
  state
};

export default payment;
