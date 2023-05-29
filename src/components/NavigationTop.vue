<template>
<nav class=" dark:bg-gray-800 bg-black dark:border-gray-700 sticky top-0 z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
    <a class="flex items-center">
        <RouterLink class="logo" to="/">
          <img class="w-44 flex justify-center items-center" src="../assets/img/Black_Video.gif" loop alt="" />
        </RouterLink>
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-black  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span class="sr-only">Åben hovedmenuen</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4  items-center bg-black border md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
            <RouterLink 
              class="block py-2 pl-3 pr-4 text-gray-300 rounded  md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:hover:bg-gray-700"
              to="/seevents"
              >Events
            </RouterLink>
        </li>
        <li>
            <RouterLink v-if="isLoggedIn"
              class="block py-2 pl-3 pr-4 text-gray-300 rounded  md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:hover:bg-gray-700 "
              to="/opretevents"
              >Tilføj Events
            </RouterLink>
        </li>
<!--         <li>
            <RouterLink v-if="isLoggedIn"
              class="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:hover:bg-gray-700 "
              to="/register"
              >Tilføj Admin
            </RouterLink>
        </li> -->
        <li>
            <div class="logud py-2 pl-3 pr-4 text-black rounded md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 block" to="/" @click="handleSignOut" v-if="isLoggedIn">
            <button class="bg-orange-500 rounded-lg px-5 py-2 hover:bg-orange-600 ">Log Ud</button>
            </div>

          </li>
      </ul>
    </div>
  </div>
</nav>
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