<template>
  <RouterView />
  <Navigation></Navigation> 
  <Footer></Footer>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue"
import { onMounted, provide, reactive, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import Hjem from "./views/Hjem.vue";

const router = useRouter();
const isLoggedin = ref(false);
let auth;

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

@media screen and (min-width: 375px){
  .event-cards{
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (min-width: 500px) {
  .event-card-wrap{
    padding: 100px 16px;
  }

  .event-cards{
    grid-template-columns: repeat(2, 1fr);
  }

}

@media screen and (min-width: 900px){
  .event-cards{
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1200px){
  .event-cards{
    grid-template-columns: repeat(4, 1fr);
  }
}




</style>