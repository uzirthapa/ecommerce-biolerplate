<template>
  <v-footer
    dark
    height="90px"
  >
    <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-4"
      dark
      icon
    >
      <v-icon size="18px">
        {{ icon }}
      </v-icon>
    </v-btn>
    <div class="flex-grow-1" />
    <div>Ecommerce Sekeleton &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style></style>
