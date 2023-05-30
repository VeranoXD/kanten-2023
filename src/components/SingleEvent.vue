<template>
  <div class="event-detail">
    <div class="event-card">
      <h1 class="text-3xl font-bold">{{ event.content }}</h1>
      <p class="text-lg">{{ event.event }}</p>
      <p class="text-lg">{{ event.dato }}</p>
      <p class="text-lg">{{ event.venue }}</p>
      <p class="text-lg">{{ event.textareafield }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseInit";

const event = ref(null);

watch(() => {
  const eventId = $props.eventId; // Assuming the prop name is "eventId"

  const eventDocRef = doc(db, "events", eventId);
  onSnapshot(eventDocRef, (docSnapshot) => {
    if (docSnapshot.exists()) {
      event.value = {
        id: docSnapshot.id,
        content: docSnapshot.data().content,
        event: docSnapshot.data().event,
        venue: docSnapshot.data().venue,
        textareafield: docSnapshot.data().textareafield,
        dato: docSnapshot.data().dato,
      };
    } else {
      // Handle event not found
    }
  });
});
</script>