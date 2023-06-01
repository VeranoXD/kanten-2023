import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from 'firebase/auth' 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: "/", 
            name: 'Hjem',
            component: () => import("../views/Hjem.vue"),
            meta: {
                title: 'Hjem',
            },
        },
    /*     { 
            path: "/events",
            name: 'events',
            component: () => import("../components/Events.vue"),
            meta: {
                title: 'Events',
                requiresAuth: false
            }, 
        }, */
        { 
            path: "/omos",
            name: 'omos',
            component: () => import("../views/About.vue"),
            meta: {
                title: 'Om Os',
                requiresAuth: false
            }, 
        },
/*         { 
            path: "/register",
            name: 'register',
            component: () => import("../views/Register.vue"),
            meta: {
                title: 'Opret Bruger',
                requiresAuth: true
            }, 
        }, */
        { 
            path: "/login", 
            name: 'Login',
            component: () => import("../views/Login.vue"), 
            meta: {
                title: 'Login',
          
            }, 
        },
        { 
            path: "/glemt-adgangskode", 
            name: 'GlemtAdgangskode',
            component: () => import("../views/ForgotPassword.vue"),
            meta: {
                title: 'Glemt Adgangskode?',
                requiresAuth: false
            }, 
        },
        { 
            path: "/display", 
            name: 'display',
            component: () => import("../views/DisplayEvent.vue"),
            meta: {
                title: 'Display?',
                requiresAuth: false
            }, 
        },
        {
            path: "/seevents",
            name: 'seevents',
            component: () => import("../views/SeEvents.vue"),
            meta: {
                title: 'Events',
                requiresAuth: false
            },
        },
        {
            path: "/opretevents",
            name: 'opretevents',
            component: () => import("../views/CreateEvents.vue"),
            meta: {
                title: 'Opret Events',
                requireAuth: true
            },
        },
        {
            path: "/",
            name: 'signout',
            meta: {
                title: 'SignOut',
                requiresAuth: false
            },
        },
        {
            path: "/gallery",
            name: 'gallery',
            component: () => import("../views/Gallery.vue"),
            meta: {
                title: 'Gallery',
                requiresAuth: false
            },
        },
        {
            path: "/frivillig",
            name: 'frivillig',
            component: () => import("../views/Frivillig.vue"),
            meta: {
                title: 'Frivillig',
                requiresAuth: false
            },
        },
    ],
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
        getAuth(), 
        user => {
          removeListener()
          resolve(user)
        }, 
        reject
      )
    })
  }
  
  router.beforeEach(async(to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
      if (await getCurrentUser()) {
  
  // before getCurrentUser   if (getAuth().currentUser) {
        next()
      } else {
        next({name: '/login'})
      }
    } else {
      next()
    }
  })

export default router;


