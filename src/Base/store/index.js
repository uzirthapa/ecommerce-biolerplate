import actions from "./base.actions";
import mutations from "./base.mutations";
import getters from "./base.getters";
import state from "./base.state";

// make our modules namespaced to avoid method name conflicts
const namespaced = true;

const base = {
    namespaced,
    getters,
    actions,
    mutations,
    state
};

export default base;