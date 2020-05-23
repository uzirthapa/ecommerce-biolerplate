<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 12 : 0"
      outlined
    >
      <!-- <v-img
        :src="`https://picsum.photos/500/300?image=${index * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${index * 5 + 10}`"
        class="grey lighten-2 white--text"
        aspect-ratio="1.5"
      />-->
      <v-img
        :src="item.images[0]"
        :lazy-src="item.images[0]"
        class="grey lighten-2 white--text"
        aspect-ratio="1.5"
      />
      <v-card-title class="transparent">
        <v-layout wrap>
          <v-flex
            xs12
            pt-0
          >
            <router-link
              :to="`/products/${item.id}`"
              replace
            >
              <div class="body-2 font-weight-bold">
                {{ item.title }}
              </div>
            </router-link>
          </v-flex>
          <v-flex
            xs12
            pt-0
          >
            <div class="body-2">
              $ {{ item.price }}
            </div>
          </v-flex>
          <v-flex
            xs12
            pt-0
          >
            <v-rating
              :value="item.rating"
              readonly
              dense
              small
            />
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-actions>
        <v-btn
          block
          depressed
          class="text-none"
          color="primary"
          @click="addToCart(item)"
        >
          <v-icon
            left
            small
          >
            mdi-cart
          </v-icon>Add to Cart
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: function() {
        return {};
      }
    },
    index: {
      type: Number,
      default: function() {
        return 0;
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
