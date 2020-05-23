<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-card outlined>
        <v-card-title>Shipping address</v-card-title>
        <v-card-text>
          <v-layout align-center>
            <v-flex xs6>
              <!--{{ address }}-->
              <template v-if="address.shipping.street1">
                {{ address.shipping.street1 }}, {{ address.shipping.city }},
                {{ address.shipping.state }} {{ address.shipping.zip }}
              </template>
              <template v-else
                >No shipping address on record.</template
              >
            </v-flex>
            <v-flex xs6 class="text-right">
              <v-dialog v-model="addressDialog" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn text v-on="on">
                    <v-icon left>mdi-autorenew</v-icon>Update
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title>
                    <div class="title">Shipping Address</div>
                    <v-spacer />
                    <v-btn icon @click="addressDialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      label="Street 1"
                      v-model="shippingAddress.street1"
                    />
                    <v-text-field
                      label="Suite, Apt etc"
                      v-model="shippingAddress.street2"
                    />

                    <v-layout wrap class="justify-space-between">
                      <v-flex xs3>
                        <v-text-field
                          label="City"
                          v-model="shippingAddress.city"
                        />
                      </v-flex>

                      <v-flex xs3>
                        <v-text-field
                          label="State"
                          v-model="shippingAddress.state"
                        />
                      </v-flex>

                      <v-flex xs3>
                        <v-text-field
                          label="Zip"
                          v-model="shippingAddress.zip"
                        />
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn @click="handleClickUpdateAddress(shippingAddress)"
                      >Add</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12>
      <v-card outlined>
        <v-card-title>Payment method</v-card-title>
        <v-card-text>
          <v-layout wrap align-center>
            <v-flex xs6>
              <v-select
                v-model="source"
                item-text="last4"
                item-value="id"
                label="Credit Card"
                :items="savedPayments"
                @change="updateSource"
              />
            </v-flex>

            <v-flex xs6 class="text-right">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn text v-on="on">
                    <v-icon left>mdi-plus</v-icon>Add new card
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title>
                    <div>Add Credit Card</div>
                    <v-spacer />
                    <v-btn icon @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-card-title>

                  <v-card-text>
                    <e-payment-add-card
                      :loading="loading"
                      @submit-new-credit-card="submitNewCreditCard"
                    />
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import EPaymentAddCard from "./EPaymentAddCard";
export default {
  components: {
    EPaymentAddCard
  },
  props: {
    // submitNewCreditCard: {
    //   type: Function,
    //   default: function() {
    //     return {};
    //   }
    // },
    loading: {
      type: Boolean,
      default: () => false
    },
    savedPayments: {
      type: Array,
      default: () => []
    },
    address: {
      type: Object,
      default: () => {}
    },
    handleSaveShippingAddress: {
      type: Function,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      dialog: false,
      source: null,
      addressDialog: false,

      shippingAddress: {
        street1: "",
        street2: "",
        state: "",
        city: "",
        zip: ""
      }
    };
  },
  methods: {
    handleClickUpdateAddress(value) {
      console.log("action called");
      this.handleSaveShippingAddress(value);
      this.addressDialog = false;
    },
    updateSource() {
      this.$emit("update-source", this.source);
    },
    submitNewCreditCard(card) {
      this.$emit("submit-new-credit-card", card);
    }
  }
};
</script>

<style scoped></style>
