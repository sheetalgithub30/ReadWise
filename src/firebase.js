import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBnIF5iljkzIlsbrGMaZUt2sFEJaXmd9HM",
    authDomain: "geekster-b5711.firebaseapp.com",
    projectId: "geekster-b5711",
    storageBucket: "geekster-b5711.appspot.com",
    messagingSenderId: "115425978972",
    appId: "1:115425978972:web:9e1e1dfef76be9014b5499",
    measurementId: "G-DWM3B25NX7"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

