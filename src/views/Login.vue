<template>
  <h1>Sign In to an Account</h1>
  <p><input type="text" placeholder="E-mail" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errorMsg">{{ errorMsg }}</p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>
    
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errorMsg = ref();
const router = useRouter();

const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-emil":
          errorMsg.value = "Invalid e-mil";
          break;
        case "auth/user-not-found":
          errorMsg.value = "No account with that emil was found";
          break;
        case "auth/wrong-password":
          errorMsg.value = "Incorrect password";
          break;
        default:
          errorMsg.value = "E-mail or password was incorrect";
          break;
      }
    });
};

const signInWithGoogle = () => {};
</script> 