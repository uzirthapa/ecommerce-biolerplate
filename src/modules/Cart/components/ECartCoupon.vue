<template>
  <v-card outlined>
    <v-card-title>Coupon code</v-card-title>
    <v-card-text>
      If you have a coupon code, please enter it in the box below
      <v-text-field
        v-model="coupon"
        label="eg: Summer Sale"
      />
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn
        block
        depressed
        dark
        class="primary"
        @click="checkCoupon()"
      >
        <v-icon left>
          mdi-tag
        </v-icon>Apply coupon
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      coupon: ""
    };
  },
  methods: {
    checkCoupon() {
      this.$emit("checkCoupon", this.coupon);
    }
  }
};
</script>

<style scoped>
.header {
  border-radius: 50px;
}
</style>
