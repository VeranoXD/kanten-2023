import { createRouter, createWebHistory } from "vue-router";

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
        { 
            path: "/events",
            name: 'events',
            component: () => import("../components/Events.vue"),
            meta: {
                title: 'Hjem',
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
            path: "/opret",
            name: 'opret',
            component: () => import("../views/Opretevent.vue"),
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
                requiresAuth: false
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
    ],
});

router.beforeEach((to, from, next) => {
    document.title = `Kanten | ${to.meta.title}`; 
    next();
});



export default router;


