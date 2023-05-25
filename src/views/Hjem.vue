<template>
  <div class="hjem sm:ml-96 ">
    <div class="relative ">
        <img src="../assets/eventPhotos/bg1.png" />
        <h1 class="absolute text-9xl font-extrabold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            KANTEN ESBJERG</h1>
        <!--     <h1 class="absolute text-2xl font-bold text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            EVENTS, KLUBAFTENER, ØVELOKALER OG LYDSTIDIE</h1> -->
    </div>
    <div class="event-card-wrap relative px-1 bg-black">
      <div class="container">
        <div class="event-cards grid gap-10 grid-cols-4 text-center">
          <EventCard
          />
        </div>
      </div>
      <div class="bil flex justify-center text-center items-center pt-52">
        <img class="object-fill w-7/12" src="../assets/eventPhotos/306706441_10229767955131935_1582526657894034496_n.png" />
      </div>
      <div class="overskriftKraftvarke flex text-white py-6 text-center justify-start max-w-4xl " >
        <h1 class=" text-5xl mr-10 font-bold text-center">KRAFTVÆRKET</h1>
        <div class="bars items-center flex justify-center text-center space-x-7  ">
         <span class="bg-orange-500 text-black font-medium px-3 py-1 rounded-lg max-w-4xl">Lydstudie</span>
        <span class="bg-orange-500 text-black font-medium px-3 py-1 rounded-lg max-w-4xl">Øvelokale</span>
        </div>
      </div>
      <div class="ij max-w-4xl flex text-white py-6 text-center justify-center ">
        <p class="text-white text-center">Esbjerg har i flere år manglet gængse øvelokaler med mulighed for indspilning, og her vil Kanten give muligheden for at benytte sig af et lydstudie samt et øvelokale af høj kvalitet. I kraft af Kantens vision om at hjælpe det musikalske vækstlag med at skabe musik, så vil der tilbydes en lydtekniker som ifølge aftale kan undervise i lydstudieteknik - alt efter behov. Med Kraftværkets placering i Østerbyen vil vi løfte interessen for musik, særligt for de lokale unge. Det vil vi f.eks. gøre med undervisning i øjenhøjde og med kendskab til unge i området. Kraftværket kan benyttes af alle der spiller, eller gerne vil spille musik.</p>
      </div>
      
    </div>
  </div>
</template>

<script>
import Events from "../components/Events.vue";
import EventCard from "../components/EventCard.vue";
import SeEventsVue from '../views/SeEvents.vue';
export default {
  name: "Home",
  components: { Events, EventCard, SeEventsVue, },
  data() {
    return {
    };
  },
/*   computed: {
    sampleEventCards () {
      return this.$store.state.sampleEventCards;
    }
  } */
};
</script>

<script setup>

import { ref, onMounted } from "vue";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase/firebaseInit";


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
      };
      fbEvents.push(todo);
    });
    todos.value = fbEvents;
  });
});


</script>