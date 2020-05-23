<template>
  <v-card outlined>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="primary">mdi-map-marker</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ address.street1 }}, {{ address.street2 }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ address.city }}, {{ address.state }},
          {{ address.zip }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style></style>
