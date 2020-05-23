<template>
  <v-card outlined>
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">
            mdi-account
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ account.name }}</v-list-item-title>
          <v-list-item-subtitle>Full Name</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="nameDialog = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-dialog v-model="nameDialog" width="500px">
            <e-profile-edit-dialog
              name="nameDialog"
              :update="updateUserName"
              title="Update Name"
              :initial-string="newName"
              :loading="loading"
              @close="close"
            />
          </v-dialog>
        </v-list-item-action>
      </v-list-item>
      <v-divider inset />
      <v-list-item v-if="account.phone">
        <v-list-item-icon>
          <v-icon color="primary">
            mdi-phone
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ account.phone }}</v-list-item-title>
          <v-list-item-subtitle>Phone</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider inset />
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">
            mdi-email
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ account.email }}</v-list-item-title>
          <v-list-item-subtitle>Email</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="emailDialog = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-dialog v-model="emailDialog" width="500px">
            <e-profile-edit-dialog
              name="emailDialog"
              :update="updateUserEmail"
              title="Update Email"
              :initial-string="newEmail"
              :loading="loading"
              @close="close"
            />
          </v-dialog>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
// @click="updateUserEmail"
import EProfileEditDialog from "./EProfileEditDialog";
export default {
  components: {
    EProfileEditDialog
  },
  props: {
    account: {
      type: Object,
      default: function() {
        return {};
      }
    },
    updateUserEmail: {
      type: Function,
      default: function() {
        return {};
      }
    },
    updateUserName: {
      type: Function,
      default: function() {
        return {};
      }
    },
    loading: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      newEmail: this.account.email,
      newName: this.account.name,
      emailDialog: false,
      nameDialog: false
    };
  },
  methods: {
    close(name) {
      if (name == "emailDialog") {
        this.emailDialog = false;
      } else if (name == "nameDialog") {
        this.nameDialog = false;
      }
    }
  }
};
</script>

<style></style>
