<template>
  <v-card
    class="px-4 mt-9"
    outlined
  >
    <v-layout wrap>
      <v-flex xs12>
        <v-list
          color="transparent"
          class="pa-0"
        >
          <v-list-item class="pa-0">
            <v-list-item-content>
              <div class="headline">
                {{ item.title }}
              </div>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-layout wrap>
                <v-btn icon>
                  <v-icon>mdi-share</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-layout>
            </v-list-item-action>
          </v-list-item>
          <v-list-item class="pa-0">
            <v-list-item-content>
              <v-list-item-title>
                <v-rating
                  dense
                  readonly
                  :value="item.rating"
                />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="pa-0">
            <v-btn
              block
              depressed
              large
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
            <!-- <add-to-cart-btn :large="true" :item="item" /> -->
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-content>
              <div class="title">
                {{ item.descriptionTitle }}
              </div>
              <div class="body-2">
                {{ item.description }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
      <v-flex xs12>
        <v-divider />
        <v-list
          color="transparent"
          class="pa-0"
        >
          <v-list-item class="px-0">
            <v-list-item-content class="mb-2">
              <div class="title mb-3">
                Features
              </div>
              <v-layout wrap>
                <v-flex
                  v-for="(feature, i) in item.features"
                  :key="i"
                >
                  <v-chip
                    label
                    small
                  >
                    {{ feature }}
                  </v-chip>
                </v-flex>
              </v-layout>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-card>
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
