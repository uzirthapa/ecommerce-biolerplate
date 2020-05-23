const getters = {
  products: state => {
    // return state.items
    return state.products;
  },
  product: state => {
    // return state.items.find(item => item.id === id)
    return state.product;
  },
  status: state => {
    return state.status.loading;
  },
  categoryItems: state => {
    return state.categoryItems;
  },
  categories: state => {
    return state.categories;
  },
  category: state => id => {
    return state.categories.find(category => category.id == id);
  }
};

export default getters;
