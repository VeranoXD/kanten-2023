<template>
  <div
    class="form-wrap overflow-hidden flex justify-center h-screen self-center my-0 mx-auto w-full bg-black"
  >
    <form
      class="login py-0 px-2 relative flex flex-col justify-center items-center flex-1" @submit.prevent="login"
    >
      <div class="top flex justify-center items-center">
        <img class="w-36" src="../assets/img/Black_Video.gif" alt="" />
      </div>
      <h2 class="text-white font-extrabold text-3xl">Login til Kanten</h2>
      <p class="login-register mb-6 mt-4 text-white">
        Har du ikke en bruger?
        <RouterLink class="text-white underline" :to="{ name: 'register' }"
          >Opret bruger</RouterLink
        >
      </p>
      <div class="inputs w-full max-w-sm">
        <div class="input relative flex justify-center items-center mb-2">
          <input
            type="text"
            placeholder="Email"
            class="text bg-gray-200 w-full pl-10 pr-3 py-6 h-12 outline-none flex items-center self-center"
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
      </div>
      <router-link
        class="glemt-adgangskode cursor-pointer text-sm text-white mt-2 mx-0 mb-3"
        :to="{ name: 'GlemtAdgangskode' }"
        >Glemt Adgangskode?</router-link
      >
      <button
        class="sign-in text-white border-2 border-white px-10 py-3 w-full max-w-sm"
        value="login"
      >
        Login
      </button>
    </form>
  </div>
</template>
    
<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseInit'
import router from '../router';

export default {
  data() {
    return {
      email:    '',
      password: ''
    }
  },
  methods: {
    login() {
      // login user
      signInWithEmailAndPassword(auth,this.email,this.password)
      .then(() => {
        // emit event for member area
        this.$emit('loggedIn')
        console.log('Du er logget ind')
        router.push('/')
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      })
    }
  }
}
</script> 

<style>
@media screen and (min-width: 900px) {
  .form-wrap {
    width: 100%;
  }
  .form {
    padding: 0 50px;
  }
  h2 {
    font-size: 180px;
  }
}
</style>