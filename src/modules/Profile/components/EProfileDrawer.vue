<template>
  <v-navigation-drawer
    stateless
    permanent
    app
    clipped
    :mini-variant.sync="$vuetify.breakpoint.xsOnly"
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2 d-none d-sm-flex">
        <v-btn
          :disabled="!authStatus"
          color="black"
          class="white--text"
          block
          @click.prevent="signOut()"
        >
          Logout
        </v-btn>
        <!-- <LogoutBtn /> -->
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    logout: {
      type: Function,
      default: function() {
        return {};
      }
    },
    emptyCart: {
      type: Function,
      default: function() {
        return {};
      }
    },
    authStatus: {
      type: Boolean,
      default: function() {
        return null;
      }
    }
  },

  data() {
    return {
      items: [
        { title: "Account", icon: "mdi-account", route: "/profile/account" },
        {
          title: "Purchase History",
          icon: "mdi-history",
          route: "/profile/purchase-history"
        },
        { title: "Wish List", icon: "mdi-heart", route: "/profile/wish-list" }
      ]
    };
  },
  computed: {
    mini() {
      return this.$vue;
    }
  },
  methods: {
    signOut() {
      this.logout();
      this.emptyCart();
    }
  }
};
</script>

<style></style>
