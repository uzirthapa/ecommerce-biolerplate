import Vue from "vue";
import { firestorePlugin } from "vuefire";
import firebase_config from "../config/firebase";

Vue.use(firestorePlugin);

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Get a Firestore instance
const fb = firebase.initializeApp(firebase_config);

export const db = fb.firestore();

// Get a Auth instance
export const auth = fb.auth();
