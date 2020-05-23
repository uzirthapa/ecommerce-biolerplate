const mutations = {
  updateSources(state, value) {
    // convert obj to arr
    let tempSources = [];
    let sourcesArr = Object.values(value);
    for (let card of sourcesArr) {
      tempSources.push({ id: card.id, last4: card.last4 });
    }
    state.sources = [...tempSources];
  }
  ,
  updateCharges(state, value) {
    let tempCharges = [];
    let chargesArr = Object.values(value);
    for (let charge of chargesArr) {
      tempCharges.push(charge);
    }
    state.charges = [...tempCharges];
  },
  updateCharge(state, value) {
    state.charge = value
  },

  updateAddress(state, value) {
    console.log("mutation");
    console.log(value);
    state.address = value;
  },
  updateLoading(state, value) {
    state.loading = value
  }
};

export default mutations;
