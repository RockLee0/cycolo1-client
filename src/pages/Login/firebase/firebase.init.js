 
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initalizeFirebase=()=>{

    initializeApp(firebaseConfig);
}

export default initalizeFirebase; 