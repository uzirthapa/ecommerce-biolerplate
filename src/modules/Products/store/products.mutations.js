import Vue from "vue";
const mutations = {
  updateItems(state, value) {
    console.log(value);
    state.products = value;
    // state.items.concat(value)
  },
  updateItem(state, value) {
    console.log(value);
    state.product = value;
  },
  updateLastVisible(state, value) {
    state.lastVisible = value;
  },
  updateStatus(state, value) {
    Vue.set(state.status, "loading", value);
  },
  updateCategoryItems(state, value) {
    state.categoryItems = value;
  },
  updateCategories(state, value) {
    state.categories = value;
  }
};

export default mutations;
