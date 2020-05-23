<template>
  <v-container>
    <v-layout
      class="md8 xs12 sm12"
      wrap
    >
      <h2 class="mt-10 ml-3">
        Categories
      </h2>
      <e-product-category-list :categories="categories" />
    </v-layout>
  </v-container>
</template>

<script>
import EProductCategoryList from "../components/EProductCategoryList";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    EProductCategoryList
  },
  computed: {
    ...mapGetters({
      categories: "products/categories"
    })
  },
  created() {
    this.getCategories();
  },

  methods: {
    ...mapActions({
      getCategories: "products/getCategories"
    })
  }
};
</script>

<style></style>
