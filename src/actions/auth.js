import firebase from "firebase/app";
import { googleProvider } from "../firebase/firebase";

export const login = (uid) => {
  return {
    type: "LOGIN",
    uid,
  };
};

export const startLogin = (history) => (dispatch) => {
  googleProvider.addScope("email");
  googleProvider.addScope("profile");
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      dispatch(login(result.user.uid));
      localStorage.setItem("uid", result.user.uid);
    })
    .then(() => {
      history.push("/dashboard");
    });
  // .then(() => (window.location = "/dashboard"));
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const startLogout = () => (dispatch) =>
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(logout());
      localStorage.removeItem("uid");
    })
    // .then(() => {
    //
    // });
    .then(() => (window.location = "/"));
