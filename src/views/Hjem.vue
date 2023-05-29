<template>
  <div class="hjem">
    <div class=" flex">
        <img class=" w-full" src="../assets/eventPhotos/bg1.png" />
    </div>
    <div class="event-card-wrap relative px-1 bg-black">
      <h3 class="kommende font-bold text-white text-center text-5xl mb-20">EVENTS</h3>
      <div class="fix px-10 flex justify-center">
        <div class="event-cards grid gap-10 grid-cols-4 text-center  w-1/2">
          <EventCard
          />
        </div>
      </div>
     
      <div class="center flex flex-col justify-center items-center">
      <div class="bil flex justify-center text-center items-center pt-52">
        <img class=" kraftbillede w-1/2 " src="../assets/eventPhotos/306706441_10229767955131935_1582526657894034496_n.png" />
      </div>
      <div class="overskriftKraftvarke flex text-white py-6 text-center justify-center w-full" >
        <h1 class=" kraft text-5xl mr-5 font-bold text-center px-6 mt-10">KRAFTVÆRKET</h1>
        <div class="bars items-center flex justify-center text-center space-x-7  ">
         <h1 class="bg-orange-500 text-black font-medium px-3 py-1 rounded-lg ">Lydstudie</h1>
        <h1 class="bg-orange-500 text-black font-medium px-3 py-1 rounded-lg ">Øvelokale</h1>
        </div>
      </div>
      <div class="ij flex text-white py-6 justify-center px-6 w-1/2">
        <p class="text-gray-400 ">Esbjerg har i flere år manglet gængse øvelokaler med mulighed for indspilning, og her vil Kanten give muligheden for at benytte sig af et lydstudie samt et øvelokale af høj kvalitet. I kraft af Kantens vision om at hjælpe det musikalske vækstlag med at skabe musik, så vil der tilbydes en lydtekniker som ifølge aftale kan undervise i lydstudieteknik - alt efter behov. Med Kraftværkets placering i Østerbyen vil vi løfte interessen for musik, særligt for de lokale unge. Det vil vi f.eks. gøre med undervisning i øjenhøjde og med kendskab til unge i området. Kraftværket kan benyttes af alle der spiller, eller gerne vil spille musik.</p>
      </div>
      <router-link to="/omos" class="px-4 text-white py-2 rounded-lg border flex justify-center items-center text-center"
      >Læs Mere</router-link>
    </div>

<!-- 
    <Sponsors></Sponsors> -->
    
    </div>
  </div>
</template>

<script>
import Events from "../components/Events.vue";
import EventCard from "../components/EventCard.vue";
import SeEventsVue from '../views/SeEvents.vue';
import Sponsors from "../components/Sponsors.vue";
export default {
  name: "Home",
  components: { Events, EventCard, SeEventsVue, Sponsors },
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

<style scoped>





@media (max-width: 800px) {
  .overskriftKraftvarke{
    flex-direction: column;
  }

  .ij {
    width: 100%;
  }

  .bars{
    padding-top: 20px;
  }

  .kraft{
    margin: 0;
  }


  .kommende{
    font-size: 45px;
  }
  /* Add more media queries and adjust styles as needed */

  
}



@media (max-width: 1000px) {
  .ij {
    width: 100%;
  }

  .kraftbillede{
    width: 100%;
  }

}

@media (max-width: 1500px) {
  .event-cards{
    width: 95%;
  }

}
</style>