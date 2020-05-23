import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import firebase from "./plugins/firebaseold"
import { auth } from "@/plugins/firebase";

Vue.config.productionTip = false;

// Subscribe to store updates
store.subscribe((mutation, state) => {
  let store = {
    version: state.version,
    cart: state.cart
  };
  console.log(state.cart);

  // Store the state object as a JSON string
  localStorage.setItem("store", JSON.stringify(store));
});

export const bus = new Vue();

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/auth')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  vuetify,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  created() {
    let vm = this;
    auth.onAuthStateChanged(function(user) {
      vm.$store.commit("auth/updateUser", user);
      vm.$store.commit("auth/updateAuthStatus", true);
      vm.$store.dispatch("cart/getCartFromDb");
    });
  },
  render: h => h(App)
}).$mount("#app");
