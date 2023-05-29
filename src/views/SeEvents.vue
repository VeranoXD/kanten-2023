<template>
    <div class="event-card-wrap relative py-5 px-1 bg-black">
      <div class="container">
        <h3 class="font-bold text-white text-center text-5xl mb-10">Events</h3>
        <div class="event-cards grid gap-10 grid-cols-4 text-center">
          <EventCard
          />
        </div>
      </div>
    </div>

</template>

<script set>
import EventCard from "../components/EventCard.vue";

export default {
  name: "Events",
  components: { EventCard},
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
/*   computed: {
    sampleEventCards () {
      return this.$store.state.sampleEventCards;
    }
  } */
};
</script>

<style >

@media (max-width: 1500px) {
  .event-cards{
    padding-left: 10px;
    padding-right: 10px;
  }

}
</style>