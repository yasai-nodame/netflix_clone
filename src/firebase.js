import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAAp5TC2dydTVjaKQ_twyZoLqFZ3H7Kyr8",
    authDomain: "netflix-clone-3c549.firebaseapp.com",
    projectId: "netflix-clone-3c549",
    storageBucket: "netflix-clone-3c549.appspot.com",
    messagingSenderId: "206785724760",
    appId: "1:206785724760:web:91b4d45462138e6ee9252d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)