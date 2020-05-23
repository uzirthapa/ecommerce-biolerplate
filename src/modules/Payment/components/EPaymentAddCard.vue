<template>
  <v-container>
    <v-layout wrap class="ma-2">
      <v-flex xs12 mb-5>
        <credit-card-field
          v-model="card"
          :activity="activity"
          @change="onChange"
          @valid="onValid"
          @invalid="onInvalid"
        />
      </v-flex>
      <v-flex xs12>
        Billing Address
      </v-flex>
      <v-flex xs12>
        <v-text-field required v-model="creditCard.address_line1" label="Street 1" />
        <v-text-field
          required
          v-model="creditCard.address_line2"
          label="Apt, Suite etc."
        />
        <v-text-field required v-model="creditCard.address_city" label="City" />
        <v-text-field required v-model="creditCard.address_state" label="State" />
        <v-text-field required v-model="creditCard.address_zip" label="Zip" />
      </v-flex>

      <v-layout wrap>
        <v-flex xs12>
          <v-btn
            :loading="loading"
            block
            depressed
            dark
            class="primary"
            @click="submit()"
            >Add</v-btn
          >
        </v-flex>
        <!-- <v-btn @click="check">Check</v-btn> -->
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
// import { CreditCardField } from "vue-credit-card-field";
export default {
  components: {
    CreditCardField: () =>
      import(
        /* webpackChunkName: "vue-credit-card-field" */ "vue-credit-card-field/src/Components/CreditCardField"
      )
  },
  props: {
    loading: {
      type: Boolean,
      default: () => false
    }
  },

  data() {
    return {
      activity: false,
      card: {},
      sources: {},
      stripeCustomerInitialized: false,
      creditCard: {
        number: "",
        cvc: "",
        exp_month: "",
        exp_year: "",
        address_line1: "",
        address_line2: "",
        address_state: "",
        address_city: "",
        address_zip: "",
        address_country: ""
      }
    };
  },
  methods: {
    onChange() {
      console.log("change", arguments);
    },
    check() {
      console.log(this.card);
      this.creditCard.number = this.card.number;
      this.creditCard.cvc = this.card.cvc;
      this.creditCard.exp_month = this.card.expMonth;
      this.creditCard.exp_year = this.card.expYear;
    },
    submit() {
      this.check();
      console.log(this.creditCard);
      this.$emit("submit-new-credit-card", this.creditCard);
    },
    onValid(e) {
      this.activity = true;
      setTimeout(() => {
        this.activity = false;
      }, 1000);
    },
    onInvalid() {
      console.log("invalid", arguments);
    }
  }
};
</script>

<style></style>
