<template>
  <v-container grid-list-md>
    <v-layout
      xs12
      class="text-center headline my-3"
    >
      Cart ({{ cart.length }} items)
    </v-layout>
    <v-layout wrap>
      <v-flex
        xs12
        sm6
      >
        <v-layout wrap>
          <v-flex
            xs12
            sm12
          >
            <e-cart-coupon @checkCoupon="checkCoupon" />
          </v-flex>
          <v-flex
            xs12
            sm12
          >
            <e-cart-order-summary
              :menu="cartSummary"
              @removeCoupon="removeCoupon({})"
            >
              <v-btn
                dark
                block
                color="primary"
                depressed
                to="/payment"
              >
                <v-icon left>
                  mdi-cart
                </v-icon>Checkout
              </v-btn>
            </e-cart-order-summary>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        xs12
        sm6
        md6
      >
        <e-cart-list
          :remove-from-cart="removeFromCart"
          :items="cart"
        />
      </v-flex>
    </v-layout>
    <!-- order summary -->
  </v-container>
</template>

<script>
import ECartList from "../components/ECartList";
import ECartOrderSummary from "../components/ECartOrderSummary";
import ECartCoupon from "../components/ECartCoupon";
import costCalc from "../../../mixins/costCalc";

import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    ECartList,
    ECartOrderSummary,
    ECartCoupon
  },
  mixins: [costCalc],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      cart: "cart/cart",
      coupon: "cart/coupon"
    })
  },
  methods: {
    ...mapActions({
      removeFromCart: "cart/removeFromCart",
      checkCoupon: "cart/checkCoupon"
    }),
    ...mapMutations({
      removeCoupon: "cart/setCoupon"
    })
  }
};
</script>

<style></style>
