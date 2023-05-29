<template>
 <div  @submit.prevent="addNewsletter" id="newsletter-banner" tabindex="-1" class="  left-0 z-50 flex justify-between w-full p-4 border-b border-gray-800 bg-black dark:bg-gray-700 dark:border-gray-600 border-t">
    <div class="flex items-center flex-shrink-0 w-full mx-auto sm:w-auto">
        <form
        action="#" class="flex flex-col items-center w-full md:flex-row">
            <label for="email" class="flex-shrink-0 mb-2 mr-auto text-sm font-medium text-gray-500 md:mb-0 md:mr-4 dark:text-gray-400 md:m-0">Skriv dig op til vores nyhedsbrev</label>
            <input v-model="newEmail" type="email" id="email" placeholder="Indsæt din email" class="bg-gray-200 text-gray-900 md:w-64 mb-2 md:mb-0 md:mr-4 text-sm rounded-l block w-full p-2.5 dark:text-white" required />
            <button type="submit" class="text-white bg-orange-600 hover:bg-orange-700  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Tilmeld</button>
        </form>
    </div>
    <div class="flex items-center absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto">
        <button data-dismiss-target="#newsletter-banner" type="button" class="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div> 
</template>

<script>
import { Modal } from 'flowbite'
import { db } from '../firebase/firebaseInit'
import { ref, onMounted } from "vue";
import {
  collection,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

const newsletterCollectionRef = collection(db, "newletters");

export default {
  setup() {
    const newEmail = ref("");
    const newsRef = ref([]);

    const addNewsletter = () => {
      addDoc(newsletterCollectionRef, {
        email: newEmail.value
      });
      newEmail.value = "";
    };

    onMounted(() => {
      onSnapshot(newsletterCollectionRef, (querySnapshot) => {
        const fbEvents = [];
        querySnapshot.forEach((doc) => {
          const news = {
            email: doc.data().email
          };
          fbEvents.push(news);
        });
        newsRef.value = fbEvents;
      });

      const $buttonElement = document.querySelector('#button');
      const $modalElement = document.querySelector('#modal');
      const $closeButton = document.querySelector('#closeButton');

      const modalOptions = {
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40'
      }

      if ($modalElement) {
        const modal = new Modal($modalElement, modalOptions);
        $buttonElement.addEventListener('click', () => modal.toggle());
        $closeButton.addEventListener('click', () => modal.hide());
      }
    });

    return {
      newEmail,
      addNewsletter
    };
  }
}
</script>

<style>

</style>
