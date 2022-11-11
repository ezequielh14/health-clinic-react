import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAbtCEGj9oE9GPfPIr1ghEHqanCh0vcE80",
    authDomain: "auth-health.firebaseapp.com",
    projectId: "auth-health",
    storageBucket: "auth-health.appspot.com",
    messagingSenderId: "551759891632",
    appId: "1:551759891632:web:a1fcf3a51f6cda2fa0bf75",
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
