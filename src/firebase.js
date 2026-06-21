import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {

  apiKey:"AIzaSyCo9SHg_x6s0YTg79BLdJR5UPwGA6k0FqM",

  authDomain:"greenbasket-821ee.firebaseapp.com",

  projectId:"greenbasket-821ee",

  storageBucket:"greenbasket-821ee.firebasestorage.app",

  messagingSenderId:"656489100268",

  appId:"1:656489100268:web:9de08f118dfdc359e946c9"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();