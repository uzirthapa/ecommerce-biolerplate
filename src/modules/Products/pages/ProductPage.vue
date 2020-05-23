<template>
  <v-container grid-list-lg>
    <v-layout
      wrap
      justify-center
    >
      <v-flex
        sm12
        md6
        xs12
        mt-10
      >
        <e-product-carousel :images="item.images" />
      </v-flex>
      <v-flex
        xs12
        sm12
        md4
      >
        <e-product-details
          :add-to-cart="addToCart"
          :item="item"
        />
      </v-flex>
    </v-layout>
    <v-layout
      v-if="item.reviews"
      justify-center
      wrap
    >
      <v-flex
        xs12
        sm12
      >
        <v-divider />
        <div class="title">
          Reviews:
        </div>
      </v-flex>
      <v-flex
        sm10
        xs12
      >
        <e-product-review-list :reviews="item.reviews" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EProductDetails from "../components/EProductDetails";
import EProductReviewList from "../components/EProductReviewList";
import EProductCarousel from "../components/EProductCarousel";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    EProductDetails,
    EProductReviewList,
    EProductCarousel
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      item: "products/product"
    })
  },
  created() {
    this.getItem(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      addToCart: "cart/addToCart",
      getItem: "products/getItem"
    })
  }
};
</script>

<style></style>
