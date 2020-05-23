import { db, auth } from "@/plugins/firebase";
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth'
import { bus } from '@/main'
import router from '@/routes'

const actions = {
    async userRegister({ commit }, { email, password, name, route }) {
        commit("updateStatus", true);
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user.user.uid);
                const ref = db.collection("users").doc(user.user.uid);
                ref
                    .set({
                        id: ref.id,
                        cart: [],
                        address: {
                            billing: '',
                            shipping: ''
                        },
                        name: name,
                        email: email,
                        timestamp: new Date()
                    })
                commit("updateUser", user);
            })
            .then(() => {
                commit("updateAuthStatus", true);
                if (route) {
                    router.push(route);
                } else {
                    router.push("/");
                }
            })
            .catch(err => {
                console.log(err);
                bus.$emit("show-snackbar", "Registration Failed: " + err);
                commit("updateRegistrationError", err)
                commit("updateStatus", false);
            })
            .finally(() => {
                commit("updateStatus", false);
            });
    },
    async userLogin({ commit }, { email, password, route }) {
        commit("updateStatus", true);
        auth
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
                commit("updateUser", user);
                commit("updateAuthStatus", true);
                if (route) {
                    router.push(route);
                } else {
                    router.push("/profile/account");
                }
            })
            .catch((err) => {
                bus.$emit("show-snackbar", "Login Failed: " + err);
                commit("updateStatus", false);
                commit("updateLoginError", err)
                commit("updateUser", {});
                commit("updateAuthStatus", false);

            })
            .finally(() => {
                commit("updateStatus", false);
            });
    },
    async userSignOut({ commit }) {
        // commit("updateStatus", true);
        auth
            .signOut()
            .then(() => {
                commit("updateUser", {});
            })
            .catch((err) => {
                bus.$emit("show-snackbar", "Sign Out Failed: " + err);
                commit("updateUser", {});
                commit("updateAuthStatus", false);
            })
            .finally(() => {
                commit("updateAuthStatus", false);

                router.push("/");
                // commit("updateStatus", false);
            });
    },
    async forgotPassword({ commit }, { email }) {
        console.log(email)
        auth.sendPasswordResetEmail(email).then(function () {
            bus.$emit("show-snackbar", "A password reset link has been sent to: " + email);
        }).catch(function (err) {
            bus.$emit("show-snackbar", "There was an error: " + err);
        })
    },
    async socialLogin({ commit }, website) {
        var provider;
        console.log(website)
        switch (website) {
            case 'google':
                provider = new firebase.auth.GoogleAuthProvider();
                break;
            case 'facebook':
                provider = new firebase.auth.FacebookAuthProvider();
                break;
            default:
                break;
        }

        console.log(provider)
        auth.signInWithPopup(provider).then((res) => {
            console.log(res)
            db.collection("users")
                .doc(res.user.uid)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        commit("updateUser", res.user);
                    } else {
                        const ref = db.collection("users").doc(res.user.uid);
                        ref
                            .set({
                                id: ref.id,
                                cart: [],
                                name: res.user.displayName,
                                email: res.user.email,
                                timestamp: new Date()
                            })
                        commit("updateUser", res.user);
                    }
                })

        }).catch((err) => {
            bus.$emit("show-snackbar", "There was an error: " + err);
        }).finally(() => {
            router.push("/profile/account");
        })
    }

}

export default actions