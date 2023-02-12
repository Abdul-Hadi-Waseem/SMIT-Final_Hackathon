import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDEPPajzlZUX0TdUDLwYms2yqtNg5Sq3Rk",
  authDomain: "website-21246.firebaseapp.com",
  projectId: "website-21246",
  storageBucket: "website-21246.appspot.com",
  messagingSenderId: "201522358520",
  appId: "1:201522358520:web:dbda38fca7429e280a730d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};
