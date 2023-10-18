import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBn2Nqhm49k9RN-7HeA4tPAujlYG3zYqYk",
  authDomain: "lavka-pasechnika-rf-a069f.firebaseapp.com",
  projectId: "lavka-pasechnika-rf-a069f",
  storageBucket: "lavka-pasechnika-rf-a069f.appspot.com",
  messagingSenderId: "1056712525346",
  appId: "1:1056712525346:web:e584718a5ee9288a2cac7b"
};

export const app: any   =   initializeApp(firebaseConfig)
export const auth: any  =   getAuth(app)
export const db: any    =   getFirestore(app)
