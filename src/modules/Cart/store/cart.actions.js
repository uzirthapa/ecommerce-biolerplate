import { db, auth } from "@/plugins/firebase";
const actions = {
  addToCart({ commit, dispatch }, product) {
    console.log(product);
    commit("addToCart", product);
    dispatch("saveCartToDb");
  },
  removeFromCart({ commit, dispatch }, product) {
    console.log(product);
    commit("removeFromCart", product);
    dispatch("saveCartToDb");
  },
  emptyCart({ commit, dispatch }) {
    commit("emptyCart");
    dispatch("saveCartToDb");
  },
  saveCartToDb({ state }) {
    if (!auth.currentUser) {
      return;
    }
    db.collection("users")
      .doc(auth.currentUser.uid)
      .update({
        cart: state.cart
      });
  },
  getCartFromDb({ commit }) {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        db.collection("users")
          .doc(auth.currentUser.uid)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              commit("setCart", doc.data().cart);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      } else {
        // commit('setCart', [{ name: 1 }])
        // No user is signed in.
      }
    });
  },
  checkCoupon({ commit }, code) {
    console.log(code)
    if (code == "") {
      return
    }
    db.collection("coupons").doc(code).get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        commit("setCoupon", doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
    // db.collection("coupons").where("code", "==", code).get().then(function (querySnapshot) {

    //   querySnapshot.forEach(function (doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // }).catch(function (error) {
    //   console.log("Error getting documents: ", error);
    // });

  }
};

export default actions;
