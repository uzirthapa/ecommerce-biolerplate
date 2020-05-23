// import firebase from 'firebase'

// var db = firebase.firestore();
import { db, auth } from "@/plugins/firebase";
import { bus } from '@/main'
const actions = {
  getUser({ commit }) {
    console.log("getUser ");
    commit("updateStatus", true);
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        db.collection("users")
          .doc(auth.currentUser.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              commit("updateProfile", doc.data());
            } else {
              console.log("No Such Document");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
            commit("updateStatus", false);
          })
          .finally(function () {
            //Stop Loading mutation
            commit("updateStatus", false);
          });
      } else {
        commit("updateProfile", {});
        commit("updateStatus", false);
        // No user is signed in.
      }
    });
  },
  updateUserEmail({ dispatch, commit }, newEmail) {
    commit("updateStatus", true);
    auth.currentUser
      .updateEmail(newEmail)
      .then(res => {
        db.collection("users")
          .doc(auth.currentUser.uid)
          .update({
            email: newEmail
          })
          .then(() => {
            // bus.$emit("show-snackbar", "Your email has been updated to: " + newEmail);
            console.log("Document successfully updated!");
            commit("updateStatus", false);
            dispatch("getUser");
          })
          .catch(function (err) {
            // The document probably doesn't exist.
            bus.$emit("show-snackbar", "There was an error: " + err);
            console.error("Error updating document: ", err);
            commit("updateStatus", false);
          });
      })
      .catch(function (err) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", err);
        commit("updateStatus", false);
      });
  },
  updateUserName({ dispatch, commit }, newName) {
    commit("updateStatus", true);

    db.collection("users")
      .doc(auth.currentUser.uid)
      .update({
        name: newName
      })
      .then(() => {
        // bus.$emit("show-snackbar", "Your name has been updated to: " + newName);
        console.log("Document successfully updated!");
        commit("updateStatus", false);
        dispatch("getUser");
      })
      .catch(function (err) {
        // The document probably doesn't exist.
        // bus.$emit("show-snackbar", "There was an error: " + err);
        console.error("Error updating document: ", err);
        commit("updateStatus", false);
      });
  }
};

export default actions;
