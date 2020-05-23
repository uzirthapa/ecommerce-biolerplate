<template>
  <v-card outlined>
    <v-card-title>Order Summary</v-card-title>
    <v-card-text>
      Shipping and additional costs are calculated based on values you have
      entered.
    </v-card-text>
    <v-list>
      <template v-for="(item, index) in menu">
        <div :key="index">
          <v-list-item v-if="item.menuTitle === 'Coupon'">
            <v-list-item-content>
              <v-list-item-title class="body-2">
                {{ item.menuTitle }}:
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>{{ item.value }}</v-list-item-icon>
            <v-list-item-action>
              <v-btn
                icon
                @click="removeCoupon()"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-list-item v-else>
            <v-list-item-content>
              <v-list-item-title class="body-2">
                {{ item.menuTitle }}:
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>${{ item.value }}</v-list-item-icon>
          </v-list-item>
          <v-divider />
        </div>
      </template>
    </v-list>
    <v-card-actions>
      <slot />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    removeCoupon() {
      this.$emit("removeCoupon");
    }
  }
};
</script>

<style></style>
