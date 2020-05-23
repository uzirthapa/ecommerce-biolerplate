<template>
  <v-container
    grid-list-lg
    class="mt-2"
  >
    <v-layout wrap>
      <template v-for="(item, i) in items">
        <v-flex
          :key="i"
          xs12
          sm5
          md4
          lg3
        >
          <e-base-product-list-item
            :add-to-cart="addToCart"
            :item="item"
            :index="i"
          />
        </v-flex>
      </template>
      <!-- <template v-for="(item, i) in 16">
        <v-flex xs12 sm5 md4 lg3 :key="i">
          <e-product-list-item-2 :index="i" />
        </v-flex>
      </template>-->
    </v-layout>
  </v-container>
</template>

<script>
import EBaseProductListItem from "./EBaseProductListItem";
export default {
  components: {
    EBaseProductListItem
  },
  props: {
    items: {
      type: Array,
      default: function() {
        return null;
      }
    },
    addToCart: {
      type: Function,
      default: function() {
        return 0;
      }
    }
  }
};
</script>

<style></style>
