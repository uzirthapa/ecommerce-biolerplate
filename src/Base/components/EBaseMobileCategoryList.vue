<template>
  <v-card
    width="200px"
    class="mx-1"
    flat
    :to="'/category/' + category.id + '?q=' + category.name"
  >
    <v-img
      src="https://picsum.photos/id/11/500/300"
      lazy-src="https://picsum.photos/id/11/500/300"
      class="grey lighten-2 white--text"
      height="100px"
      gradient="to top right, rgba(0,0,0,.70), rgba(25,32,72,.7)"
    >
      <v-card-title class="fill-height">
        <v-layout
          wrap
          align-center
          text-center
        >
          <v-flex xs12>
            <v-icon
              large
              color="white"
            >
              mdi-hand-saw
            </v-icon>
          </v-flex>
          <v-flex xs12>
            <div class="body-1">
              {{ category.name }}
            </div>
          </v-flex>
        </v-layout>
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style></style>
