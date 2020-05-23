const getters = {
  profile: state => {
    return state.profile;
  },
  status: state => {
    return state.status.loading;
  }
};

export default getters;
