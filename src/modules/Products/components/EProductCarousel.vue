<template>
  <div>
    <v-carousel
      v-model="model"
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="400"
    >
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        :src="image"
      >
        <!-- <v-img :src="image" :lazy-src="image" aspect-ratio="1.5" class="grey lighten-2" /> -->
      </v-carousel-item>
    </v-carousel>
    <v-slide-group
      multiple
      show-arrows
    >
      <v-slide-item
        v-for="(image, n) in images"
        :key="n"
      >
        <v-flex xs12>
          <v-card
            width="100px"
            height="100px"
            @click="changeSlide(n)"
          >
            <v-img
              :src="image"
              :lazy-src="image"
              aspect-ratio="1"
              class="grey lighten-2"
            />
          </v-card>
        </v-flex>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      cycle: false,
      model: 0
    };
  },
  methods: {
    changeSlide(slide) {
      this.model = slide;
    }
  }
};
</script>

<style></style>
