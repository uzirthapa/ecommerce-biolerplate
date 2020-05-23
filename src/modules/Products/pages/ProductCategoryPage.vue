<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs10>
        <v-layout>
          <v-flex
            ml-3
            mt-10
            mb-5
          >
            <h2>{{ category($route.params.id).name }}</h2>
          </v-flex>
        </v-layout>
        <v-layout>
          <e-product-list
            :add-to-cart="addToCart"
            :items="categoryItems"
          />
        </v-layout>
        <v-layout
          v-if="categoryItems.length === 0"
          justify-center
        >
          <div class="headline grey--text">
            No products... :(
          </div>
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
      categoryItems: "products/categoryItems",
      category: "products/category"
    })
  },
  created() {
    this.getCategoryItems(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      addToCart: "cart/addToCart",
      getCategoryItems: "products/getCategoryItems"
    })
  }
};
</script>

<style></style>
