<template>
  <v-app-bar
    app
    clipped-left
  >
    <v-app-bar-nav-icon class="d-flex d-sm-none" />
    <v-toolbar-title class="headline">
      <router-link to="/">
        <v-img
          style="width: 40px; height: 40%;"
          :src="require('@/assets/logo.png')"
        />
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        to="/products"
        class="text-none font-weight-regular"
        text
      >
        Products
      </v-btn>
      <v-btn
        to="/categories"
        class="text-none font-weight-regular"
        text
      >
        Categories
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        text
        to="/auth"
      >
        Login
      </v-btn>

      <v-btn
        to="/profile/account"
        icon
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <!-- <v-btn v-if="authStatus" to="/profile" icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>-->

      <v-btn
        to="/cart"
        icon
      >
        <v-badge
          right
          color="red"
        >
          <template
            v-if="cartTotal > 0"
            slot="badge"
          >
            <span>{{ cartTotal }}</span>
          </template>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      loginDialog: false,
      registerDialog: false
    };
  },

  computed: {
    authStatus() {
      return this.$store.state.auth.status.authenticated;
    },
    ...mapGetters({
      cart: "cart/cart",
      status: "auth/status"
    }),
    cartTotal() {
      if (!this.cart) {
        return;
      }
      var total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].quantity;
      }
      return total;
    }
  },
  created() {},
  methods: {
    closeLoginDialog() {
      this.loginDialog = false;
    },
    closeRegisterDialog() {
      this.registerDialog = false;
    }
  }
};
</script>

<style></style>
