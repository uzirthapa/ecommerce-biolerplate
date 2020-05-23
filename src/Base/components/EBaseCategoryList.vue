<template>
  <div>
    <v-slide-group
      class="d-flex d-md-none"
      multiple
      show-arrows
    >
      <v-slide-item
        v-for="(category, i) in categories"
        :key="i"
        v-slot:default="{ active, toggle }"
      >
        <e-base-mobile-category-list :category="category" />
      </v-slide-item>
    </v-slide-group>
    <v-container
      grid-list-xs
      class="mt-5"
    >
      <v-layout
        wrap
        class="d-none d-md-flex"
      >
        <template v-for="(category, i) in categories">
          <v-flex
            :key="i"
            sm5
            md4
            lg3
          >
            <e-base-category-list-item :category="category" />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import EBaseCategoryListItem from "./EBaseCategoryListItem";
import EBaseMobileCategoryList from "./EBaseMobileCategoryList";
export default {
  components: {
    EBaseCategoryListItem,
    EBaseMobileCategoryList
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
