<template>
  <v-container
    grid-list-lg
    class="mt-5"
    max
  >
    <v-layout wrap>
      <template v-for="(category, i) in categories">
        <v-flex
          :key="i"
          xs12
          sm5
          md4
          lg3
        >
          <e-product-category-list-item :category="category" />
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import EProductCategoryListItem from "./EProductCategoryListItem";
export default {
  components: {
    EProductCategoryListItem
  },
  props: {
    categories: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style></style>
