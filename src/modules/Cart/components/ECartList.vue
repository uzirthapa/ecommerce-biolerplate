<template>
  <v-card outlined>
    <v-card-text>
      <v-simple-table v-if="items.length != 0">
        <thead>
          <tr class="grey lighten-3">
            <th
              width="160"
              class="text-left pa-4"
            >
              Product
            </th>
            <th
              width="400"
              class="text-left pa-4"
            />
            <th
              width="100"
              class="text-left pa-4"
            >
              Price
            </th>
            <th
              width="80"
              class="text-left pa-4"
            >
              Qty
            </th>
            <th
              width="80"
              class="text-left pa-4"
            >
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          <e-cart-list-item
            v-for="(item, i) in items"
            :key="i"
            :remove-from-cart="removeFromCart"
            :item="item"
          />
        </tbody>
      </v-simple-table>
      <div
        v-else
        class="pa-6 text-center"
      >
        There are no items in your cart.
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import ECartListItem from "../components/ECartListItem";
export default {
  components: {
    ECartListItem
  },
  props: {
    items: {
      type: Array,
      default: function() {
        return 0;
      }
    },
    removeFromCart: {
      type: Function,
      default: function() {
        return 0;
      }
    }
  }
};
</script>

<style scoped>
tr > th {
  font-weight: bolder;
  font-size: 0.8rem;
}
</style>
