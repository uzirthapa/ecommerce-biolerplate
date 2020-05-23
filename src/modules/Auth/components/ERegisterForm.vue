<template>
  <v-card flat>
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="fullname"
          label="Name"
          :rules="nameRules"
          required
        />
        <v-text-field
          v-model="email"
          label="Email"
          :rules="emailRules"
          required
        />
        <span class="caption grey--text text--darken-1">Please enter a valid email for your account</span>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          :rules="passwordRules"
          required
        />
        <span class="caption grey--text text--darken-1">Please enter a password for your account</span>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        :loading="status"
        depressed
        class="text-none"
        color="primary"
        @click="validate()"
      >
        Register
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { bus } from "@/main";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      valid: true,
      fullname: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"]
      // route: '/profile/user-information',
    };
  },
  computed: {
    isAuthenticated() {
      console.log(this.$store);
      return this.$store.getters["auth/getAuthStatus"];
    },
    ...mapGetters({
      status: "auth/status"
    })
  },
  methods: {
    showSnackbar() {
      bus.$emit("show-snackbar", "Registration Success");
    },
    closeDialog() {
      this.$emit("close-dialog");
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.userRegister();
      }
    },
    userRegister() {
      this.$store.dispatch("auth/userRegister", {
        name: this.fullname,
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
