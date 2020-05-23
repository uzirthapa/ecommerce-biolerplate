<template>
  <v-layout>
    <v-flex>
      <v-list
        v-for="(review, i) in reviews"
        :key="i"
        color="transparent"
      >
        <v-list-item class="pa-0">
          <v-list-item-content>
            <v-list-item-title>
              <div>{{ review.name }}</div>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div>
                <v-rating
                  dense
                  small
                  :value="review.rating"
                  readonly
                />
              </div>
            </v-list-item-subtitle>
            <div class="body-2 mt-2">
              {{ review.review }}
            </div>
            <div class="caption grey--text text--darken-2 mt-2">
              {{ review.date }}
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style></style>
