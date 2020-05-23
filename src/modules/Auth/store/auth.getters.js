const getters = {
  authenticated: state => {
    return state.status.authenticated;
  },
  status: state => {
    return state.status.loading;
  },
  getUser: state => {
    return state.status.user;
  },
  loginError: state => {
    return state.loginError;
  },
  registrationError: state => {
    return state.registrationError;
  }
};

export default getters;
