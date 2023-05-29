<template>
  <div
    v-for="event in todos " :key="event"
    class="event-card flex flex-col relative bg-gray-300 rounded-lg"
  >
    <div class="info ">
      <div class="card p-10">
        <p class="text-xl font-extrabold">{{ event.content }}</p>
        <p class="">{{ event.event }}</p>
        <p class="">{{ event.dato }}</p>

        <router-link class="mt-auto inline-flex items-center py-2" to="#">
          Se Event
        </router-link>
      </div>
    </div>
  </div>
</template>

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
        dato: doc.data().dato
      };
      fbEvents.push(todo);
    });
    todos.value = fbEvents;
  });
});

</script>

<style>
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