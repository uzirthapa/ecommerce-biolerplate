<template>
  <v-hover
    v-slot:default="{ hover }"
    data-view
  >
    <v-card
      :elevation="hover ? 12 : 0"
      flat
      :to="'/categories/' + category.id"
    >
      <v-img
        src="https://picsum.photos/500/300"
        lazy-src="https://picsum.photos/500/300"
        class="grey lighten-2 white--text"
        aspect-ratio="1.2"
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
                {{ category.icon }}
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
  </v-hover>
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
