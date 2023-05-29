<template>
  <div class="background w-auto bg-black flex items-center">
    <div class="event max-w-lg p-4 m-auto">
      <div class="field w-full">
        <h1 class="text-white text-center text-6xl font-extrabold p-7">
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div class="control">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Upload billede</label
          >
          <span class="sr-only">Upload billede</span>
          <input
            type="file"
            class="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100"
          />
        </div>

        <form @submit.prevent="addTodo">
          <div class="control">
            <button
              :disabled="!newTodoContent"
              class="button bg-orange-600 disabled:opacity-30 text-white max-w-lg p-3 m-auto w-full text-sm font-medium"
            >
              Opret Event
            </button>
          </div>
        </form>

        <div
          v-for = "todo in todos" :key="todo"
          class="card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8"
        >
          <div class="card-content p-4">
            <div class="content">
              {{ todos.content }}
              {{ todo.event }}
              {{ todo.venue }}
              {{ todo.textareafield }}

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { 
    collection, onSnapshot, addDoc, 
    query, orderBy 
} from 'firebase/firestore'
import { db } from '@/components/router'


const eventCollectionRef = collection(db, 'events')
const eventsCollectionQuery = query(eventCollectionRef, orderBy('date', 'desc'))

const todos = ref([
])


onMounted( () => {
  onSnapshot(eventsCollectionQuery, (querySnapshot) => {
    const fbEvents = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        event: doc.data().event,
        venue: doc.data().venue,
        textareafield: doc.data().textareafield,
        done: doc.data().done
      }
      fbEvents.push(todo);
    })
    todos.value = fbEvents
  })
})


const newTodoContent = ref('')
const newEventType = ref('')
const newVenue = ref('')
const newTextareafield = ref('')


const addTodo = () => {
    addDoc(eventCollectionRef, {
    content: newTodoContent.value,
    event: newEventType.value,
    venue: newVenue.value,
    textareafield: newTextareafield.value,
    done: false,
    date: Date.now()
})
  newTodoContent.value = ''
  newEventType.value = ''
  newVenue.value = ''
  newTextareafield.value = ''
 
}

</script>

<style>
.control {
  margin-top: 1rem;
}
</style>