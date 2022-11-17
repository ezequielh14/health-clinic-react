import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJXj114vuX5dUY-7xGT2hpYrpyfpXVZb8",
    authDomain: "health-clinic-turns.firebaseapp.com",
    projectId: "health-clinic-turns",
    storageBucket: "health-clinic-turns.appspot.com",
    messagingSenderId: "650265008407",
    appId: "1:650265008407:web:36633b09f1f7f7fc457f52",
};

export const firebaseApp = initializeApp(firebaseConfig); // initialize app
export const db = getFirestore(firebaseApp); // this gets the firestore database
export const authFire = getAuth(firebaseApp);

//### REGISTER USER WITH FIREBASE AUTHENTICATION ###//
export const registerUser = (email, password) => {
    const auth = getAuth(firebaseApp);
    return createUserWithEmailAndPassword(auth, email, password);
};

//### LOGIN USER WITH FIREBASE ###//
export const loginUser = (email, password) => {
    const auth = getAuth(firebaseApp);
    return signInWithEmailAndPassword(auth, email, password);
};

//### LOGOUT USER WITH FIREBASE ###//
export const logoutUser = () => {
    const auth = getAuth(firebaseApp);
    signOut(auth)
        .then(() => {
            alert("User signed out!");
        })
        .catch((error) => {
            alert("Something went wrong!");
            const errorCode = error.code;
            console.log(errorCode);
        });
};
