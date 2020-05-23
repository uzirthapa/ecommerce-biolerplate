<template>
  <v-container>
    <v-layout
      fill-height
      justify-center
      align-center
      wrap
    >
      <v-card width="500">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="basil"
          grow
          centered
        >
          <v-tab>Login</v-tab>
          <v-tab>Register</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <e-login-form />
          </v-tab-item>
          <v-tab-item>
            <e-register-form />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import ELoginForm from "../components/ELoginForm";
import ERegisterForm from "../components/ERegisterForm";
export default {
  components: {
    ELoginForm,
    ERegisterForm
  },
  data() {
    return {
      tab: 0
    };
  }
};
</script>

<style></style>
