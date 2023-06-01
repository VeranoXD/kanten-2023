<template>
  <div class="background w-auto bg-black  flex items-center">
    <div class="event max-w-lg p-4 m-auto">
      <div class="field w-full">
        <h1 class="text-white text-center text-5xl font-bold p-7">
          Opret Event
        </h1>
        <div class="control">
          <label
            for="overskrift"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Overskrift</label
          >
          <input
            v-model="newTodoContent"
            type="text"
            id="overskrift"
            class="text bg-gray-200 w-full  outline-none flex items-center self-center"
            required
          />
        </div>

        <div class="control">
          <label
            for="eventtype"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Event type</label
          >
          <select
            v-model="newEventType"
            id="countries"
            class="text bg-gray-200 w-full  outline-none flex items-center self-center"
          >
            <option value="Manaclub">Manaclub</option>
            <option value="DEFT">DEFT</option>
            <option value="Vertex">Vertex</option>
            <option value="X-Massive DUB">X-Massive DUB</option>
          </select>
        </div>

        <div class="control">
          <label
            for="modested"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Mødested</label
          >
          <input
            v-model="newVenue"
            type="text"
            id="modested"
            class="text bg-gray-200 w-full  outline-none flex items-center self-center"
            required
          />
        </div>

        <div class="control">
          <label
            for="modested"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Dato</label
          >
          <input
            v-model="newDate"
            type="date" min="today"
            id="modested"
            class="text bg-gray-200 w-full  outline-none flex items-center self-center"
            required
          />
        </div>


        <div class="control">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Beskrivelse</label
          >
          <textarea
            v-model="newTextareafield"
            name="beskrivelse"
            id=""
            cols="30"
            rows="10"
            class="text bg-gray-200 w-full  outline-none flex items-center self-center"
            required
          ></textarea>
        </div>


<!--         <div class="control">
          <label
            for="modested"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Billetto URL</label
          >
          <input
            v-model="newBillet"
            type="text"
            id="modested"
            class="text bg-gray-200 w-full  outline-none flex items-center self-center"
            required
          />
        </div> -->

        <div class="control">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Upload billede</label
          >
          <span class="sr-only">Upload billede</span>
          <input type="file" label="File input" @change="uploadImg" />
       <!--    <input
            type="file" @change="onFileSelected"
            class="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100"
          /> -->
        </div>

        <form @submit.prevent="addTodo">
          <div class="control">
            <button
              :disabled="!newTodoContent"
              class="sign-in text-white border-2 border-white px-10 py-3 w-full  disabled:opacity-40"
            >
              Opret Event
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
/* import ref */

import { ref, onMounted } from "vue";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase/firebaseInit";
import {
  getStorage,
  ref as refFB,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";



const onFileSelected = (event) => {
  console.log(event);
};

/* Firebase refs */

const eventCollectionRef = collection(db, "events");
const eventsCollectionQuery = query(
  eventCollectionRef,
  orderBy("date", "desc")
);

/* todos */
const todos = ref([]);

/* Get todos */
onMounted(() => {
  onSnapshot(eventsCollectionQuery, (querySnapshot) => {
    const fbEvents = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        event: doc.data().event,
        venue: doc.data().venue,
        textareafield: doc.data().textareafield,
        done: doc.data().done,
/*         billet: doc.data().billet */
      };
      fbEvents.push(todo);
    });
    todos.value = fbEvents;
  });
});

/* Add Todo */

const newTodoContent = ref("");
const newEventType = ref("");
const newVenue = ref("");
const newTextareafield = ref("");
const newDate = ref("");
const imgURL = ref('')
/* const newBillet = ref('') */

const addTodo = () => {
  addDoc(eventCollectionRef, {
    content: newTodoContent.value,
    event: newEventType.value,
    venue: newVenue.value,
    textareafield: newTextareafield.value,
    done: false,
    dato: newDate.value,
    date: Date.now(),
    imgURL: imgURL.value,
 /*    billet: newBillet.value */
  });
  newTodoContent.value = "";
  newEventType.value = "";
  newVenue.value = "";
  newTextareafield.value = "";
/*   newBillet.value = ""; */
};


const storage = getStorage();

// Firebase storage upload image + get download URL + enable button after image uploaded
const uploadImg = async (event) => {
  let file = event.target.files[0]; // get the file
  console.log("file", file);
  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "image/jpeg",
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = refFB(storage, "images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);

        imgURL.value = downloadURL; // update variable imgURL and put the image URL link in it.
       // addItemData.uploadBtnDisabled = false; // enable button after image uploaded is complete
      });
    }
  );
};
</script>
  
  <style>
.control {
  margin-top: 1rem;
}

</style>