<template>
  <!-- v-if="checkHvisTitleErSand" -->
  <div
    v-for="event in todos"
    :key="event"
    class="event-card flex flex-col relative h-full"
  >
    <div class="info flex">
      <div class="card p-2 text-white rounded-lg h-fit">
        <img class="w-full flex" :src="event.imgURL" alt="" />
        <div class="top">
          <p class="text-3xl font-extrabold text-left px-2 py-3 ">{{ event.content }}</p>
        </div>
        <div class="samler flex justify-between px-2 text-gray-400 flex-col text-left">
          
          <div class="mix flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin pr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
   <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
</svg>
          <p>{{ event.venue }}</p>
        </div>

        <div class="mix flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-due pr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
   <path d="M16 3v4"></path>
   <path d="M8 3v4"></path>
   <path d="M4 11h16"></path>
   <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
</svg>
          <p class="">{{ event.dato }}</p>
        </div>

        <div class="mix flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ticket pr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 5l0 2"></path>
   <path d="M15 11l0 2"></path>
   <path d="M15 17l0 2"></path>
   <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
</svg>
          <p class="">{{ event.event }}</p>
        </div>

        </div>
        <p class="text-left px-2 py-4">{{ event.textareafield }}</p>

        <!-- v-if herinde: Check på title af siden, hvis det er "hjem", så skal kan du .slice dit array, så den kun viser 3 elementer. Søg på js array slice  -->
 <!--        <router-link class="mt-auto inline-flex items-center py-2" to="#">
          Se Event
        </router-link> -->
      </div>
    </div>
  </div>
  <!--   <div v-else>
    Hvis, så det normale kode
  </div> -->
</template>

<script>
  export default {
    data() {
      return {
        visible: true
      }
    }
  }
</script>


<script setup>
import { ref, onMounted } from "vue";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseInit";

/* Firebase refs */

const eventCollectionRef = collection(db, "events");
const eventsCollectionQuery = query(
  eventCollectionRef,
  orderBy("date", "desc")
);

/* todos */
const todos = ref([0]);

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
        dato: doc.data().dato,
        imgURL: doc.data().imgURL,
      };
      fbEvents.push(todo);
    });
    todos.value = fbEvents;
  });
});


</script>



<style>
.card {
  background-color: rgb(17, 17, 17);
}

@media screen and (min-width: 375px) {
  .event-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (min-width: 500px) {
  .event-card-wrap {
    padding: 100px 16px;
  }

  .event-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 900px) {
  .event-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .event-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>