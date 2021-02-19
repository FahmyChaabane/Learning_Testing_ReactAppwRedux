import firebase from "firebase/app";
import { googleProvider } from "../firebase/firebase";

export const startLogin = () => () => {
  googleProvider.addScope("email");
  googleProvider.addScope("profile");
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      window.location = "/dashboard";
    });
};

export const startLogout = () => () =>
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location = "/";
    });
