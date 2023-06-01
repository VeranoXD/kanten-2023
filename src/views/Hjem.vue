<template>
  <div class="hjem">
    <section class="bg-black text-white">
      <div class="hero">
        <div
          class=" fest mx-auto px-4 py-64 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-5xl text-center">
            <h1
              class="text-white bg-clip-text text-6xl font-extrabold  sm:text-8xl"
            >
             KANTEN ESBJERG
            </h1>

            <p class="mx-auto mt-4 max-w-4xl sm:text-lg/relaxed">
              
              Foreningen Kanten driver Esbjergs nye kulturfællesskab for det kreative vækstlag i byen.
            </p>
            <p class="mx-auto  max-w-4xl sm:text-lg/relaxed">
              
              Vores vision er at skabe en synlig plads og støtte de spirende kreative miljøer og fællesskaber.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">

              <router-link
          to="/seevents"
          class="block w-full rounded bg-orange-600 hover:bg-orange-500 px-12 py-3 text-sm font-medium text-gray-200 hover:text-white   sm:w-auto"
          >Se Events</router-link
        >
              <router-link
          to="/frivillig"
          class="block w-full rounded border border-white px-12 py-3 text-sm font-medium text-white hover:bg-gray-300  hover:text-black sm:w-auto"
          >Bliv Frivillig</router-link
        >
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="event-card-wrap relative bg-black">
  <!--     <h3 class="kommende font-bold text-white text-center text-5xl mb-20">
        EVENTS
      </h3> -->
      <div class="fix px-10 flex justify-center py-20">
        <div class="event-cards grid gap-10 grid-cols-4 text-center w-1/2">
       <!--    <EventCard /> -->
        </div>
      </div>

      <div class="center flex flex-col justify-center items-center">
        <div class="bil flex justify-center text-center items-center pt-20">
          <img
            class="kraftbillede w-1/2"
            src="../assets/eventPhotos/306706441_10229767955131935_1582526657894034496_n.png"
          />
        </div>
        <div
          class="overskriftKraftvarke flex text-white py-6 text-center justify-center w-full"
        >
          <h1
            class="kraft text-5xl mr-5 font-bold text-center px-6 justify-center flex"
          >
            KRAFTVÆRKET
          </h1>
          <div
            class="bars items-center flex justify-center text-center space-x-7"
          >
            <h1
              class="bg-orange-500 text-black font-medium px-3 py-1 rounded-lg"
            >
              Lydstudie
            </h1>
            <h1
              class="bg-orange-500 text-black font-medium px-3 py-1 rounded-lg"
            >
              Øvelokale
            </h1>
          </div>
        </div>
        <div class="ij flex text-white py-6 justify-center px-6 w-1/2">
          <p class="text-gray-400">
            Esbjerg har i flere år manglet gængse øvelokaler med mulighed for
            indspilning, og her vil Kanten give muligheden for at benytte sig af
            et lydstudie samt et øvelokale af høj kvalitet. I kraft af Kantens
            vision om at hjælpe det musikalske vækstlag med at skabe musik, så
            vil der tilbydes en lydtekniker som ifølge aftale kan undervise i
            lydstudieteknik - alt efter behov. Med Kraftværkets placering i
            Østerbyen vil vi løfte interessen for musik, særligt for de lokale
            unge. Det vil vi f.eks. gøre med undervisning i øjenhøjde og med
            kendskab til unge i området. Kraftværket kan benyttes af alle der
            spiller, eller gerne vil spille musik.
          </p>
        </div>
        <router-link
          to="/omos"
          class="px-4 text-white py-2 rounded-lg border flex justify-center items-center text-center"
          >Læs Mere</router-link
        >
      </div>

      <!-- 
    <Sponsors></Sponsors> -->
    </div>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";
import SeEventsVue from "../views/SeEvents.vue";
import Sponsors from "../components/Sponsors.vue";
export default {
  name: "Home",
  components: { EventCard, SeEventsVue, Sponsors },
  data() {
    return {};
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
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/firebaseInit";

/* Firebase refs */

const eventCollectionRef = collection(db, "events");
const eventsCollectionQuery = query(
  eventCollectionRef, limit(3),
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
  .overskriftKraftvarke {
    flex-direction: column;
  }
  
  

  .ij {
    width: 100%;
  }

  .bars {
    padding-top: 20px;
  }

  .kraft {
    margin: 0;
  }

  .kommende {
    font-size: 45px;
  }
  /* Add more media queries and adjust styles as needed */
}

@media (max-width: 1000px) {
  .ij {
    width: 100%;
  }

  .kraftbillede {
    width: 100%;
  }
}

@media (max-width: 1500px) {
  .event-cards {
    width: 95%;
  }
}

.hero {
  position:relative;
    color: white;
    background: url("../assets/eventPhotos/bg2.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
}
</style>