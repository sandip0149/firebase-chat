import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
 
const firebaseConfig = {
  apiKey: "AIzaSyD0BFaHY-oW_dcz5FpxoLoYwCk79oyLcYM",
  authDomain: "fire-7f6f5.firebaseapp.com",
  projectId: "fire-7f6f5",
  storageBucket: "fire-7f6f5.appspot.com",
  messagingSenderId: "547855652637",
  appId: "1:547855652637:web:2ebcfdaf46ddc765e8f3f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage();


// apiKey: "AIzaSyAc4go5teVt1qQ3d9HkowJDJKHmVBhmJkk",
// authDomain: "fir-chat-app-v1-f2ad2.firebaseapp.com",
// projectId: "fir-chat-app-v1-f2ad2",
// storageBucket: "fir-chat-app-v1-f2ad2.appspot.com",
// messagingSenderId: "554414972250",
// appId: "1:554414972250:web:6b96e427b25ee45bbb2763"


// apiKey: "AIzaSyD3EPfsa714kImzHg9aY04KHFTvjuLFmkM",
//   authDomain: "firechat-584fa.firebaseapp.com",
//   projectId: "firechat-584fa",
//   storageBucket: "firechat-584fa.appspot.com",
//   messagingSenderId: "427071833627",
//   appId: "1:427071833627:web:f050cc69f5a5d09fe09abe"