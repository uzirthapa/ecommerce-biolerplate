<template>
  <v-app id="app">
    <e-base-toolbar />
    <v-content>
      <router-view />
    </v-content>
    <v-snackbar
      v-model="snackbar"
      bottom
      multi-line
      :timeout="timeout"
    >
      {{ text }}
    </v-snackbar>
  </v-app>
</template>
<script>
import { bus } from "./main";
import EBaseToolbar from "@/Base/components/EBaseToolbar";
export default {
  name: "App",
  components: {
    EBaseToolbar
  },
  data: () => ({
    snackbar: false,
    text: "",
    timeout: 5000
  }),
  created() {
    bus.$on("show-snackbar", data => {
      this.snackbar = true;
      this.text = data;
    });
  }
};
</script>
