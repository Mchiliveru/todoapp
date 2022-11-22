import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDSGqxJAlEXazO9iyhooExWu6ocuEzNe1I",
    authDomain: "todoapp-7dec5.firebaseapp.com",
    projectId: "todoapp-7dec5",
    storageBucket: "todoapp-7dec5.appspot.com",
    messagingSenderId: "348328511920",
    appId: "1:348328511920:web:8fe6453c542374c061ee75",
    measurementId: "G-N27YTQSL2R"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }