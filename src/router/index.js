import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: "/", 
            name: 'Hjem',
            component: () => import("../views/Hjem.vue") 
        },
        { 
            path: "/register",
            name: 'register',
            component: () => import("../views/Register.vue") 
        },
        { 
            path: "/events",
            name: 'events',
            component: () => import("../components/Events.vue") 
        },
        { 
            path: "/login", 
            name: 'Login',
            component: () => import("../views/Login.vue") 
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
        },
    ],
});


export default router;

/*  const getCurrentUser = () => {
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
});  */
