<template>
<!--   <div class="flex flex-col text-center space-y-10 h-100">
<h1 class="w-100">Opret bruger</h1>
<p class="w-100"><input type="text" placeholder="Emailaresse" v-model="email"></p>
<p class="w-100"><input type="password" placeholder="Kodeord" v-model="password"></p>
<p class="w-100"><button @click="register">Opret bruger</button></p>
<p class="w-100"><button @click="signInWithGoogle">Log ind med Google</button></p>
</div> -->

  <div
    class="flex min-h-screen overflow-auto flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-black"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-5xl font-extrabold leading-9 tracking-tight sm:text-6xl text-white"
      >
        Opret bruger
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="Emailadresse"
              v-model="email"
              required=""
              class="p-4 block w-full rounded-md text-md border-0 py-3.5 text-gray-900 shadow-sm placeholder:text-gray-900 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              autocomplete="password"
              placeholder="Adgangskode"
              required=""
              class="p-4 block w-full rounded-md text-md border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            @click="register"
            class="flex w-full justify-center rounded-md bg-white px-3 py-3.5 text-md font-bold leading-6 text-black shadow-sm hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Opret bruger
          </button>
        </div>

        <div>
          <button
            type="submit"
            @click="signInWithGoogle"
            class="flex w-full justify-center rounded-md bg-slate-950 px-3 py-3.5 text-md font-bold leading-6 text-slate-600 shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <svg class="mx-3"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              width="25"
              height="25"
            >
              <defs>
                <path
                  id="A"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </defs>
              <clipPath id="B"><use xlink:href="#A" /></clipPath>
              <g transform="matrix(.727273 0 0 .727273 -.954545 -1.45455)">
                <path d="M0 37V11l17 13z" clip-path="url(#B)" fill="#fbbc05" />
                <path
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                  clip-path="url(#B)"
                  fill="#ea4335"
                />
                <path
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                  clip-path="url(#B)"
                  fill="#34a853"
                />
                <path
                  d="M48 48L17 24l-4-3 35-10z"
                  clip-path="url(#B)"
                  fill="#4285f4"
                />
              </g>
            </svg>
            Log ind med Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

 <script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/feed");
    })
    .catch((error) => {});
};
</script>