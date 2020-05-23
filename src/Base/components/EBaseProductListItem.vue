<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      data-view
      :to="'products/' + item.id"
      :elevation="hover ? 12 : 0"
      outlined
    >
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
            <div class="body-2 font-weight-bold">
              {{ item.title }}
            </div>
          </v-flex>
          <v-flex
            xs12
            pt-0
          >
            <div class="body-2">
              $ {{ item.price }}
            </div>
          </v-flex>
        </v-layout>
      </v-card-title>
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
    }
  }
};
</script>

<style></style>
