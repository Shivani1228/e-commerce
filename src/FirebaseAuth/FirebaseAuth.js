
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDGF9DL2kCdro4OFAkm4lnNPGrVT_-0JZI",
  authDomain: "apnabazaar-76d0e.firebaseapp.com",
  projectId: "apnabazaar-76d0e",
  storageBucket: "apnabazaar-76d0e.firebasestorage.app",
  messagingSenderId: "245229854587",
  appId: "1:245229854587:web:639b0363f24473c20367de"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();
const db=getFirestore(app)
export{app,auth,db}