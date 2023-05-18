<template>
  <div class="hjem">
    <Events :event="welcomeScreen" />
    <Events
      :event="event"
      v-for="(event, index) in upcomingEvents"
      :key="index"
    />
    <div class="event-card-wrap sm:ml-96 relative py-5 px-1 bg-black">
      <div class="container">
        <h3 class="font-bold text-white text-center text-4xl mb-10">Kommende Events</h3>
        <div class="event-cards grid gap-10 grid-cols-4 text-center">
          <EventCard
            :event="event"
            v-for="(event, index) in sampleEventCards"
            :key="index"
          />
        </div>
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
      welcomeScreen: {
        title: "Esbjergs nye kulturfællesskab",
        titleText:
          "Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.",
        welcomeScreen: true,
        photo: "bg1",
      },
    };
  },
  computed: {
    sampleEventCards () {
      return this.$store.state.sampleEventCards;
    }
  }
};
</script>