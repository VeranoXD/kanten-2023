import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBWlSmea-Kmc8VbsbiKrRnLVuFdzlp-Rr8",
  authDomain: "kanten-2023.firebaseapp.com",
  projectId: "kanten-2023",
  storageBucket: "kanten-2023.appspot.com",
  messagingSenderId: "183320369827",
  appId: "1:183320369827:web:6b8fc4bc79be056578bd16",
  measurementId: "G-TDJC0FZJ92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)
