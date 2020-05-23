<template>
  <v-container>
    <div v-if="charge.source">
      <v-layout>
        <v-flex>
          <div class="display-2 font-weight-bold">Thank you for your Order!</div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3" />
      <v-layout class="mb-5">
        <v-flex>
          <div>Order Number: {{ $route.params.id }}</div>
          <div>Order Date: {{ charge.created }}</div>
          <div>Customer: {{ charge.receipt_email }}</div>
        </v-flex>
      </v-layout>
      <v-layout class="mb-5">
        <v-flex>
          <div
            class="body-1"
          >Please keep the above numbers for your reference. Please allow up to 24 hours for us to process your order for shipment.</div>
        </v-flex>
      </v-layout>
      <v-layout class="mb-5" wrap>
        <v-flex>
          <div class="title">Shipping Address:</div>
          <div>Name</div>
          <div>Street 1</div>
          <div>Street 2</div>
          <div>City</div>
          <div>State</div>
          <div>Zip</div>
        </v-flex>

        <v-flex>
          <div class="title">Payment Method:</div>
          <div>{{ charge.source.brand }}</div>
          <div>Ending in: {{ charge.source.last4 }}</div>
          <div>Exp: {{ charge.source.exp_month }} / {{ charge.source.exp_year }}</div>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex>
          <div class="title">Billing Address:</div>
          <div>Name</div>
          <div>Street 1</div>
          <div>Street 2</div>
          <div>City</div>
          <div>State</div>
          <div>Zip</div>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="loading">
      <v-overlay>
        <v-progress-circular indeterminate size="64" />
      </v-overlay>
    </div>
  </v-container>
</template>

<script>
import { db, auth } from "@/plugins/firebase";
import { mapActions, mapGetters } from "vuex";
const charges = db
  .collection("users")
  .doc(auth.currentUser.uid)
  .collection("charges");
export default {
  data() {
    return {
      loading: false,
      chargeObject: null
    };
  },
  watch: {
    chargesRef: {
      deep: true,
      handler() {
        console.log("changed");
        this.$bind("chargeObject", charges.doc(this.$route.params.id));
      }
    }
  },
  computed: {
    ...mapGetters({
      charge: "payment/charge"
    })
  },
  created() {
    console.log(this.$route.params.id);
    var vm = this;
    this.loading = true;
    setTimeout(function() {
      vm.fetchCharge(vm.$route.params.id);
      vm.emptyCart();
      vm.loading = false;
    }, 4000);
  },
  methods: {
    ...mapActions({
      emptyCart: "cart/emptyCart",
      fetchCharge: "payment/fetchCharge"
    })
  }
};
</script>

<style>
</style>