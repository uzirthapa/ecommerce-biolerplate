<template>
  <v-container grid-list-md>
    <v-layout xs12 class="text-center headline my-3">Checkout ({{ cart.length }} items)</v-layout>
    <v-layout wrap>
      <v-flex xs12 sm6>
        <e-payment-info
          :loading="loading"
          @submit-new-credit-card="submitNewCreditCard"
          :saved-payments="sources"
          @update-source="updateSource"
          :address="address"
          :handle-save-shipping-address="updateShippingAddress"
        />

        <!-- cart summary-->
        <e-cart-order-summary :menu="cartSummary" />
      </v-flex>

      <v-flex xs12 sm6>
        <v-card outlined>
          <v-card-title>Review Items</v-card-title>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 />
              <v-flex class="text-center" xs12>
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr v-for="(item, i) in cart" :key="i" class="text-left">
                        <td class="pa-4">
                          <v-img :src="item.product.images[0]" aspect-ratio="1" />
                        </td>
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>${{ item.product.price }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-btn block depressed dark class="primary my-2" @click="submitNewCharge(charge)">
                  <v-icon left>mdi-cart</v-icon>Place Order
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EPaymentInfo from "../components/EPaymentInfo";
import ECartOrderSummary from "../../Cart/components/ECartOrderSummary";
import costCalc from "../../../mixins/costCalc";

export default {
  components: {
    EPaymentInfo,
    ECartOrderSummary
  },
  mixins: [costCalc],
  data() {
    return {
      arr: {},
      source: null
    };
  },
  computed: {
    ...mapGetters({
      cart: "cart/cart",
      sources: "payment/sources",
      coupon: "cart/coupon",
      address: "payment/address",
      loading: "payment/loading"
    }),

    charge() {
      console.log(this.cart);
      let orderItems = [];
      for (let i = 0; i < this.cart.length; i++) {
        orderItems.push(this.cart[i].product.title);
      }
      return {
        orderItems: orderItems.toString(),
        amount: this.cartSummary[3].value * 100,
        source: this.source
      };
    }
  },
  created() {
    this.getSources();
    this.getAddress();
  },
  methods: {
    ...mapActions({
      submitNewCreditCard: "payment/submitNewCreditCard",
      submitNewCharge: "payment/submitNewCharge",
      getSources: "payment/getPaymentSources",
      removeFromCart: "cart/removeFromCart",
      checkCoupon: "cart/checkCoupon",
      getAddress: "payment/addressInit",
      updateShippingAddress: "payment/updateShippingAddress"
    }),
    updateSource(source) {
      this.source = source;
    }
  }
};
</script>

<style></style>
