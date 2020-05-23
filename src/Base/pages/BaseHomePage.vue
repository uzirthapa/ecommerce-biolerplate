<template>
  <div>
    <e-base-banner />
    <v-container>
      <v-layout
        wrap
        justify-center
      >
        <v-flex
          xs12
          sm12
          md9
        >
          <e-base-category-list :categories="categories" />
        </v-flex>
        <v-flex
          xs11
          mt-5
        >
          <div class="title ml-4">
            Base Products List
          </div>
          <e-base-product-list :items="items" />
          <!-- <items :items="items" /> -->
        </v-flex>
        <v-flex
          xs11
          mt-5
        >
          <e-base-subscribe @subscribe="subscribe" />
        </v-flex>
      </v-layout>
    </v-container>
    <e-base-footer />
  </div>
</template>

<script>
import EBaseBanner from "@/Base/components/EBaseBanner";
import EBaseCategoryList from "@/Base/components/EBaseCategoryList";
// import Items from "@/components/Home/Items";
import EBaseProductList from "@/Base/components/EBaseProductList";
import EBaseFooter from "@/Base/components/EBaseFooter";
import EBaseSubscribe from "@/Base/components/EBaseSubscribe";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    EBaseBanner,
    EBaseCategoryList,
    EBaseProductList,
    EBaseFooter,
    EBaseSubscribe
  },
  computed: {
    ...mapGetters({
      items: "products/products",
      categories: "products/categories"
    })
  },
  created() {
    this.getItems();
    this.getCategories();
  },

  methods: {
    ...mapActions({
      getItems: "products/getItems",
      getCategories: "products/getCategories",
      subscribe: "base/subscribe"
    })
  }
};
</script>
