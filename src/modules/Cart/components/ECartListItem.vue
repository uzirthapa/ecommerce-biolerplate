<template>
  <tr>
    <td class="pa-4">
      <v-img
        :src="item.product.images[0]"
        aspect-ratio="1.5"
      />
    </td>
    <td>
      <router-link to="/">
        {{ item.product.title }}
      </router-link>
    </td>
    <td>${{ item.product.price }}</td>
    <td>
      <v-text-field
        v-model.number="item.quantity"
        type="number"
      />
    </td>
    <td>
      <v-btn
        icon
        @click="removeFromCart(item)"
      >
        <v-icon medium>
          mdi-close
        </v-icon>
      </v-btn>
    </td>
  </tr>
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
    removeFromCart: {
      type: Function,
      default: function() {
        return 0;
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style></style>
