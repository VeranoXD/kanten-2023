<template>
  <div
    class="form-wrap overflow-hidden flex justify-center h-screen self-center my-0 mx-auto w-full bg-black"
  >
    <form
      class="login py-0 px-2 relative flex flex-col justify-center items-center flex-1"
      @submit.prevent="signUp"
    >
      <div class="top flex justify-center items-center">
        <img class="w-36" src="../assets/img/Black_Video.gif" alt="" />
      </div>
      <h2 class="text-white font-extrabold text-3xl">Opret Bruger</h2>
      <p class="login-register mb-6 mt-4 text-white">
        Har du allerede en bruger?
        <RouterLink class="text-white underline" :to="{ name: 'Login' }"
          >Login</RouterLink
        >
      </p>
      <div class="inputs w-full max-w-sm">
        <div class="input relative flex justify-center items-center mb-2">
          <input
            type="email"
            placeholder="Email"
            class="email bg-gray-200 w-full pl-10 pr-3 py-6 h-12 outline-none flex items-center self-center"
            required
            v-model="email"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mail w-6 absolute left-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
            ></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
        </div>
        <div class="input relative flex justify-center items-center mb-2">
          <input
            type="password"
            placeholder="Adgangskode"
            class="password w-full bg-gray-200 pl-10 pr-3 py-6 h-12 outline-none flex items-center self-center"
            required
            v-model="password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mail w-6 absolute left-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"
            ></path>
            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
          </svg>
        </div>
        <!--         <div class="input relative flex justify-center items-center mb-2">
          <input
            type="password"
            placeholder="Gentag adgangskode"
            class="confirmpassword w-full bg-gray-200 pl-10 pr-3 py-6 h-12 outline-none flex items-center self-center"
            v-model="register_form.confirmpassword"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mail w-6 absolute left-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M12.5 21h-5.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.74 1.012"
            ></path>
            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
            <path d="M16 19h6"></path>
            <path d="M19 16v6"></path>
          </svg>
        </div> -->
      </div>
      <button
        class="sign-in text-white border-2 border-white px-10 py-3 w-full max-w-sm mt-2"
      >
        Opret Bruger
      </button>
    </form>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseInit';
import router from '../router';


export default {
  emits: ['loggedIn'],
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    signUp() {
      // Registrer ny bruger
      createUserWithEmailAndPassword (auth, this.email, this.password)
      .then((data) => {
        console.log("Du er nu registreret!");
        router.push('/')
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      })
    }
  }
};
</script>

<style>
</style>