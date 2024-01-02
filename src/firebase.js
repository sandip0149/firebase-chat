import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyD3EPfsa714kImzHg9aY04KHFTvjuLFmkM",
  authDomain: "firechat-584fa.firebaseapp.com",
  projectId: "firechat-584fa",
  storageBucket: "firechat-584fa.appspot.com",
  messagingSenderId: "427071833627",
  appId: "1:427071833627:web:f050cc69f5a5d09fe09abe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()