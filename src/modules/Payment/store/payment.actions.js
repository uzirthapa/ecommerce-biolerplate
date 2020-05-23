import stripe_config from "@/config/stripe";
import { db, auth } from "@/plugins/firebase";
import { bus } from "@/main";
import router from "@/routes";
// eslint-disable-next-line
Stripe.setPublishableKey(stripe_config.stripePublishableKey);

const actions = {
  // eslint-disable-next-line
  submitNewCreditCard: function({ commit }, creditCard) {
    console.log(creditCard);
    commit("updateLoading", true);
    // eslint-disable-next-line
    Stripe.card.createToken(
      {
        number: creditCard.number,
        cvc: creditCard.cvc,
        exp_month: creditCard.exp_month,
        exp_year: creditCard.exp_year,
        address_zip: creditCard.address_zip,
        /* add address details here!*/
        address_line1:  creditCard.address_line1,
        address_line2: creditCard.address_line2,
        address_state:  creditCard.address_state,
        address_city: creditCard.address_city,
        address_country: creditCard.address_country
      },
      (status, response) => {
        if (response.error) {
          creditCard.error = response.error.message;
          console.log("Response: ", response);
          console.log("Status: ", status);
          commit("updateLoading", false);
        } else {
          console.log("Response: ", response);
          console.log("Status: ", status);

          db.collection("users")
            .doc(auth.currentUser.uid)
            .collection("tokens")
            .add({ token: response.id })
            .then(() => {
              commit("updateLoading", false);
              console.log(creditCard);
              creditCard = {
                number: "",
                cvc: "",
                exp_month: 1,
                exp_year: 2017,
                address_zip: ""
              };
            });
        }
      }
    );
  },
  // eslint-disable-next-line
  submitNewCharge: function({ commit }, charge) {
    console.log("charge: ", charge);
    console.log(auth.currentUser.uid);
    if (!charge.source) {
      bus.$emit("show-snackbar", "Please enter a Credit Card");
      return;
    }
    db.collection("users")
      .doc(auth.currentUser.uid)
      .collection("charges")
      .add({
        // source: charge.source,
        // amount: parseInt(charge.amount),
        // description: charge.description
        source: charge.source,
        amount: parseInt(charge.amount),
        receipt_email: auth.currentUser.email,
        description: charge.orderItems

        // billing_details: {
        //   address: {
        //     city: null,
        //     country: null,
        //     line1": null,
        //     "line2": null,
        //     "postal_code": null,
        //     "state": null
        //   },
        //   "email": null,
        //   "name": "Jenny Rosen",
        // },
        // date: charge.date,
        // order_id: charge.order_id,
        // order_items: charge.order_items,
      })
      .then(res => {
        console.log(res);
        bus.$emit("show-snackbar", "New Charge Submitted: " + res);
        router.push("/confirm-payment/" + res.id);
      });
  },
  getPaymentSources: function({ commit }) {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .collection("sources")
      .onSnapshot(
        snapshot => {
          let newSources = {};
          snapshot.forEach(doc => {
            const id = doc.id;
            newSources[id] = doc.data();
          });
          // sources = newSources;
          commit("updateSources", newSources);
        },
        () => {
          // this.sources = {};
          commit("updateSources", {});
        }
      );
  },
  getCharges: function({ commit }) {
    auth.onAuthStateChanged(function(user) {
      console.log(user);
      if (user) {
        db.collection("users")
          .doc(auth.currentUser.uid)
          .collection("charges")
          .onSnapshot(
            snapshot => {
              let newCharges = {};
              snapshot.forEach(doc => {
                const id = doc.id;
                newCharges[id] = doc.data();
              });
              console.log(newCharges);
              commit("updateCharges", newCharges);
              // this.charges = newCharges;
            },
            () => {
              // this.charges = {};
              commit("updateCharges", {});
            }
          );
      }
    });
  },
  fetchCharge({ commit }, id) {
    console.log(id);
    auth.onAuthStateChanged(function(user) {
      console.log(user);
      if (user) {
        db.collection("users")
          .doc(auth.currentUser.uid)
          .collection("charges")
          .doc(id)
          .get()
          .then(doc => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              commit("updateCharge", doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(function(error) {
            console.log("Error getting document:", error);
          });
      }
    });
  },

  addressInit({ commit }) {
    // TODO: get address from firebase and update store/state
    db.collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          commit("updateAddress", doc.data().address);
          console.log(doc.data().address);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateShippingAddress({ commit }, newAddress) {
    let address = {
      shipping: newAddress
    };
    db.collection("users")
      .doc(auth.currentUser.uid)
      .update({ address })
      .then(
        res => {
          commit("updateAddress", address);
        },
        error => {
          console.log(error);
        }
      );
  }
};

export default actions;
