import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWlSmea-Kmc8VbsbiKrRnLVuFdzlp-Rr8",
  authDomain: "kanten-2023.firebaseapp.com",
  projectId: "kanten-2023",
  storageBucket: "kanten-2023.appspot.com",
  messagingSenderId: "183320369827",
  appId: "1:183320369827:web:6b8fc4bc79be056578bd16",
  measurementId: "G-TDJC0FZJ92"
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount('#app');
