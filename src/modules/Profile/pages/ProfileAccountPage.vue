<template>
  <v-container style="max-width: 1024px">
    <v-layout>
      <v-flex>
        <h2 class="my-3">Account</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <e-profile-account
          :loading="loading"
          :update-user-email="updateUserEmail"
          :update-user-name="updateUserName"
          :account="account"
        />
      </v-flex>
    </v-layout>
    <v-layout class="my-3">
      <v-flex>
        <div class="title">Shipping Address</div>
      </v-flex>
      <v-flex />
    </v-layout>
    <v-layout v-if="account.address.shipping === ''">
      <v-flex>
        <v-card outlined>
          <v-card-text>No Shipping Address</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-flex>
        <e-profile-address-item :address="account.address.shipping" />
      </v-flex>
    </v-layout>
    <!--<v-layout class="my-3">
      <v-flex>
        <div class="title">Billing Address</div>
      </v-flex>
    </v-layout>
    <v-layout v-if="account.address.billing === ''">
      <v-flex>
        <v-card outlined>
          <v-card-text>No Billing Address</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-flex>
        {{account.address.billing}}
        <e-profile-address-item :address="account.address.billing" />
      </v-flex>
    </v-layout>-->
  </v-container>
</template>

<script>
import EProfileAccount from "../components/EProfileAccount";
import EProfileAddressItem from "../components/EProfileAddressItem";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    EProfileAccount,
    EProfileAddressItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      account: "profile/profile",
      loading: "profile/status"
    })
  },
  created() {
    this.getUser();
  },
  methods: {
    ...mapActions({
      getUser: "profile/getUser",
      updateUserEmail: "profile/updateUserEmail",
      updateUserName: "profile/updateUserName"
    })
  }
};
</script>

<style></style>
