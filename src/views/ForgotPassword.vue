<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"/>
    <Loading v-if="loading"/>
    <div class="form-wrap overflow-hidden flex justify-center h-screen self-center my-0 mx-auto w-full bg-black">
      <form class="reset py-0 px-2 relative flex flex-col justify-center items-center flex-1">
        <h2 class="text-white font-extrabold text-3xl">Nulstil Adgangskode</h2>
        <p class="login-register mb-6 mt-4 text-white">
          Indsæt din email for at nulstille den
        </p>
        <div class="inputs w-full max-w-sm">
          <div class="input relative flex justify-center items-center mb-2">
            <input
              type="text"
              placeholder="Email"
              class="email bg-gray-200 w-full pl-10 pr-3 py-6 h-12 outline-none flex items-center self-center"
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
        </div>
        <button @click.prevent="resetPassword" class="sign-in text-white border-2 border-white px-10 py-3 w-full max-w-sm">Nulstil Adgangskode</button>
      </form>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import Modal from '../components/Modal.vue';


export default {
  components: { Modal, Loading},
  name: "GlemtAdgangskode",
  data(){
    return {
        email: null,
        modalActive: false,
        modalMessage: "",
        loading: null,
    }
  },
  methods: {
    closeModal() {
       this.modalActive = !this.modalActive;
       this.email = "";
    },
  }
};
</script>
  
<style>
</style>