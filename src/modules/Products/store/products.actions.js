import { db } from "@/plugins/firebase";

const actions = {
  getItems({ commit }) {
    // commit("updateItems", dummyItems);

    let data = [];
    // let lastVisible = {};
    //Start Loading mutation
    commit("updateStatus", true);
    console.log("hello");
    console.log(db.collection("items"));
    db.collection("items")
      .get()
      .then(function (querySnapshot) {
        // if (querySnapshot.exists) {
        querySnapshot.forEach(doc => {
          data.push(doc.data());
        });
        // lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]
        commit("updateItems", data);
        // commit('updateLastVisible', lastVisible)
        // }

        // else {
        // console.log("No Such collection")
        // }
      })
      .catch(function (error) {
        console.log("Error getting collection:", error);
        commit("updateStatus", false);
      })
      .finally(function () {
        //Stop Loading mutation
        commit("updateStatus", false);
      });
  },
  getMoreItems({ commit, state }) {
    let data = [];
    let lastVisible = {};
    //Start Loading mutation
    commit("updateStatus", true);
    db.collection("items")
      .startAfter(state.lastVisible)
      .limit(8)
      .get()
      .then(function (querySnapshot) {
        if (querySnapshot.exists) {
          querySnapshot.forEach(doc => {
            data.push(doc.data());
          });
          lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
          commit("updateItems", data);
          commit("updateLastVisible", lastVisible);
        } else {
          console.log("No Such collection");
          commit("updateStatus", false);
        }
      })
      .catch(function (error) {
        console.log("Error getting collection:", error);
      })
      .finally(function () {
        //Stop Loading mutation
        commit("updateStatus", false);
      });
  },
  getCategories({ commit }) {
    var data = [];
    db.collection("categories")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(doc => {
          data.push(doc.data());
        });
        commit("updateCategories", data);
      })
      .catch(function (error) {
        console.log("Error getting collection:", error);
        commit("updateStatus", false);
      })
      .finally(function () {
        //Stop Loading mutation
        commit("updateStatus", false);
      });
  },
  getCategoryItems({ commit }, category) {
    // Start loading mutation
    let data = [];
    commit("updateStatus", true);
    db.collection("items")
      .where("categories", "array-contains", category)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(doc => {
          data.push(doc.data());
        });
        commit("updateCategoryItems", data);
      })
      .catch(function (error) {
        console.log("Error getting collection:", error);
        commit("updateStatus", false);
      })
      .finally(function () {
        //Stop Loading mutation
        commit("updateStatus", false);
      });
  },
  getItem({ commit }, item) {
    console.log(item);
    // commit("updateItem", dummyItem);

    // Start loading mutation
    commit("updateStatus", true);
    // console.log(db)
    db.collection("items")
      .doc(item)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          commit("updateItem", doc.data());
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
  },
  addItem({ commit }, item) {
    //Start Loading Mutation
    commit("updateStatus", true);
    const ref = db.collection("items").doc();
    ref
      .set({
        id: ref.id,
        name: item.name,
        description: item.description,
        price: item.price
      })
      .then(function () {
        alert("Item added Successfully");
        console.log("Item added Successfully");
        //clear all fields and stop loading
      })
      .catch(function (error) {
        console.log("Error adding document:", error);
        commit("updateStatus", false);
      })
      .finally(function () {
        //Stop Loading mutation
        commit("updateStatus", false);
      });
  },
  removeItem({ commit }, item) {
    //Start Loading Mutation
    commit("updateStatus", true);
    db.collection("items")
      .doc(item)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
        commit("updateStatus", false);
      })
      .finally(function () {
        //Stop Loading mutation
        commit("updateStatus", false);
      });
  }
};

export default actions;
