<template>
  <div>
    <e-profile-drawer
      :auth-status="authStatus"
      :logout="signOut"
      :empty-cart="emptyCart"
    />

    <router-view />
  </div>
</template>

<script>
import EProfileDrawer from "../components/EProfileDrawer";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    EProfileDrawer
  },
  computed: {
    ...mapState({
      authStatus: state => state.auth.status.authenticated
    })
    // authStatus() {
    //   return this.$store.state.auth.status.authenticated;
    // }
  },
  methods: {
    ...mapActions({
      signOut: "auth/userSignOut",
      emptyCart: "cart/emptyCart"
    })
  }
};
</script>

<style></style>
