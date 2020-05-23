<template>
  <v-card flat>
    <!-- <v-card-title>
      <div class="headline">Login</div>
      <v-spacer />
      <v-btn icon @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>-->
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="email"
          label="Email"
          :rules="emailRules"
          required
        />
        <span class="caption grey--text text--darken-1">
          This is the email you will use to login to your { name }
          account
        </span>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          :rules="passwordRules"
          required
        />
        <span class="caption grey--text text--darken-1">Please enter a password for your account</span>
      </v-form>
      <v-divider class="my-5" />
      <div class="mb-3">
        Or Sign in with:
      </div>
      <v-btn
        color="red darken-2"
        dark
        class="text-none mr-2"
        @click="socialLogin('google')"
      >
        <v-icon left>
          fab fa-google
        </v-icon>Google
      </v-btn>
      <v-btn
        color="blue darken-2"
        dark
        class="text-none"
        @click="socialLogin('facebook')"
      >
        <v-icon left>
          fab fa-facebook
        </v-icon>Facebook
      </v-btn>
    </v-card-text>
    <v-card-actions>
      <v-dialog
        v-model="reset"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            text
            class="text-none font-weight-regular"
            @click="reset = true"
          >
            Forgot my password
          </v-btn>
        </template>

        <e-password-reset-form @close-dialog="closeDialog" />
      </v-dialog>

      <v-spacer />
      <v-btn
        depressed
        :loading="status"
        color="primary"
        class="text-none"
        @click.prevent="validate()"
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { bus } from "@/main";
import { mapGetters, mapActions } from "vuex";
import EPasswordResetForm from "./EPasswordResetForm";
export default {
  components: {
    EPasswordResetForm
  },
  data() {
    return {
      valid: true,
      reset: false,
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
      // loading: false
    };
  },
  computed: {
    ...mapGetters({
      status: "auth/status",
      error: "auth/loginError"
    })
  },
  methods: {
    ...mapActions({
      socialLogin: "auth/socialLogin"
    }),
    showSnackbar() {
      bus.$emit("show-snackbar", "Login Success");
    },
    closeDialog() {
      this.reset = false;
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.userLogin();
      }
    },
    userLogin() {
      this.$store.dispatch("auth/userLogin", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
