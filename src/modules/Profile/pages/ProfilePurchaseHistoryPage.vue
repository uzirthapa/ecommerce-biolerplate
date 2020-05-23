<template>
  <v-layout
    wrap
    justify-center
  >
    <v-container>
      <v-flex my-3>
        <h2>Your Orders</h2>
      </v-flex>
      <!-- data table -->
      <v-flex v-if="charges.length > 0">
        <v-card
          v-for="(charge, i) in charges"
          :key="i"
          outlined
          class="mb-3"
        >
          <!-- <div
            v-if="charge.error"
          >There was an error in your Purchase please contact us to get a refund</div>-->
          <v-list subheader>
            <v-subheader>Order Date: {{ charge.created }}</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ charge.description }}</v-list-item-title>
                <v-list-item-subtitle>$ {{ charge.amount / 100 }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>{{ charge.source.brand }}</v-list-item-action-text>
                XXXX-XXXX-XXXX-{{ charge.source.last4 }}
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex v-else>
        <v-card outlined>
          <v-card-text>No Purchases</v-card-text>
        </v-card>
      </v-flex>

      <!-- <v-flex xs12>
        <v-card v-for="(charge, i) in charges" :key="i" outlined class="mb-3">
          <v-list subheader>
            <v-subheader>
              Order ID: {{ charge.order_id }}
              <v-spacer />
              Order Date: {{ date(charge.date) }}
           
            </v-subheader>
            <template v-for="(item, j) in charge.order_items">
              <v-list-item :key="`item-${j}`">
               
                <v-list-item-avatar>
                  <v-img :src="item.product.images[0]" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.product.title }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item.product.descriptionTitle }}
                   
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>Quantity</v-list-item-action-text>
                  <v-btn small text>{{ item.quantity }}</v-btn>

               
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
          <v-card-actions>Order Total: {{ charge.amount }}</v-card-actions>
        </v-card>
      </v-flex>-->
    </v-container>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Order",
          align: "left",
          sortable: false,
          value: "order_id"
        },
        { text: "Date", value: "date" },
        { text: "Total", value: "total" }
      ],
      defaultSelectItem: "Past 15 days",
      selectItems: ["Past 15 days", "Past 1 month", "Past 3 months"]
    };
  },
  computed: {
    ...mapGetters({
      charges: "payment/charges"
    })
  },

  created() {
    this.fetchCharges();
  },

  methods: {
    ...mapActions({
      fetchCharges: "payment/getCharges"
    }),
    date(timestamp) {
      let myDate = new Date(timestamp.seconds * 1000);
      return myDate;
    }
  }
};
</script>

<style></style>
