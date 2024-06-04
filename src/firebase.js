import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, signInWithEmailAndPassword, 
    signOut } from "firebase/auth";
import { 
    addDoc,
    collection,
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

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

const signup = async(name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};