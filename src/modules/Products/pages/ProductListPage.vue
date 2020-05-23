<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs10>
        <v-layout>
          <v-flex
            ml-3
            mt-10
          >
            <h2>Products</h2>
          </v-flex>
        </v-layout>
        <v-layout>
          <e-product-list
            :add-to-cart="addToCart"
            :items="items"
          />
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EProductList from "../components/EProductList";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    EProductList
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      items: "products/products"
    })
  },
  created() {
    this.getItems();
  },
  methods: {
    ...mapActions({
      addToCart: "cart/addToCart",
      getItems: "products/getItems"
    })
  }
};
</script>

<style></style>
