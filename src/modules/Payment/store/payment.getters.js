const getters = {
  charges: state => {
    return state.charges;
  },
  sources: state => {
    return state.sources;
  },
  charge: state => {
    return state.charge;
  },
  address: state => {
    return state.address;
  },
  loading: state => {
    return state.loading;
  }
};

export default getters;
