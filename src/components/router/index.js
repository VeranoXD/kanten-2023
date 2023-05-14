import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

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

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}

const router = createRouter ({
history: createWebHistory(),
routes: [
    { path: "/", component:() => import("../views/Home.vue")},
    { path: "/register", component:() => import("../views/Register.vue")},
    { path: "/sign-in", component:() => import("../views/SignIn.vue")},
    {
        path: "/feed", 
        component: () => import("../views/Feed.vue"),
    meta: {
        requiresAuth: true,
    },
},
],
});

const getCurrentUser = () => {
    return new Promise ((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to, from, next) => {
if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
        next();
    }
    else {
        alert("you dont have access!");
        next("/");
    }
} else {
    next();
}
});

export default router;