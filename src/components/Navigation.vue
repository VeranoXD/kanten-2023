<template>
  <button
    data-drawer-target="logo-sidebar"
    data-drawer-toggle="logo-sidebar"
    aria-controls="logo-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 max-w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div
      class="h-full px-3 py-4 overflow-y-auto bg-black dark:bg-gray-800 w-96"
    >
      <div class="flex items-center pl-2.5 mb-5">
        <RouterLink class="logo" to="/">
          <img src="../assets/img/Black_Video.gif" loop alt="" />
        </RouterLink>
      </div>
   <!--    <div class="options flex w-full p-2 text-white rounded-lg justify-center text-center hover:bg-orange-900 ">
          <div class="option">
            <RouterLink class="option" to="/admin"> 
              <p>Admin</p>
            </RouterLink> 
          </div>
        </div> -->
      <div class="center-stuff">
        <ul class="space-y-2 font-medium flex flex-col h-auto">
          <li>
            <RouterLink 
              class="flex items-center p-2 text-white rounded-lg justify-center hover:bg-orange-900"
              to="/seevents"
              >Events
            </RouterLink>
          </li>
<!--           <li>
            <RouterLink v-if="!isLoggedIn"
              class="flex items-center p-2 text-white rounded-lg justify-center hover:bg-orange-900"
              to="/login"
            >
              Login
            </RouterLink>
          </li> -->
<!--           <li>
            <RouterLink v-if="!isLoggedIn"
              class="flex items-center p-2 text-white rounded-lg justify-center hover:bg-orange-900"
              to="/register"
            >
              Opret Bruger
            </RouterLink>
          </li> -->
          <li>
            <div class="logud space-x-1 flex w-full p-2 text-white rounded-lg justify-center text-center hover:bg-orange-900" to="/" @click="handleSignOut" v-if="isLoggedIn">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon text-white icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
   <path d="M9 12h12l-3 -3"></path>
   <path d="M18 15l3 -3"></path>
</svg>
            <button class=""   >Log Ud</button>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { onMounted, ref } from "vue";
import router from "../router";

export default {
  setup() {
    const isLoggedIn = ref(false);
    const auth = getAuth();

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = user !== null;
      });
    });

    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          router.push("/");
          console.log("Du er nu logget ud!")
        })
        .catch((error) => {
          console.log(error);
        });
      
    };

    return {
      isLoggedIn,
      handleSignOut,
    };
  },
};
</script>