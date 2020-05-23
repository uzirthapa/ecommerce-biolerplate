<template>
  <v-card>
    <v-card-title>
      <div>{{ title }}</div>
      <v-spacer />
      <v-btn
        icon
        @click="close"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-text-field v-model="updatedItem" />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        :loading="loading"
        text
        @click="update(updatedItem)"
      >
        save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    update: {
      type: Function,
      default: function() {
        return {};
      }
    },
    name: {
      type: String,
      default: function() {
        return "";
      }
    },
    title: {
      type: String,
      default: function() {
        return "";
      }
    },
    initialString: {
      type: String,
      default: function() {
        return "";
      }
    },
    loading: {
      type: Boolean,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      updatedItem: this.initialString
    };
  },
  methods: {
    close() {
      this.$emit("close", this.name);
    }
  }
};
</script>

<style></style>
