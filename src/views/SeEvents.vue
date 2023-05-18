<template>
  <div class="event-card-wrap sm:ml-96 relative py-5 bg-black h-screen">
    <div class="event-cards container">
      <div class="toggle-edit flex justify-end items-center gap-3 pb-10">
        <label class="relative inline-flex items-center">
        <span class="text-white mr-3">Toggle Redigering</span>
        <input type="checkbox" v-model="editPost">
        </label>
      </div>
      <div class="style grid grid-cols-4 gap-10 justify-center text-center">
        <EventCard
          :event="event"
          v-for="(event, index) in sampleEventCards"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";
export default {
  name: "seevents",
  components: { EventCard },
  computed: {
    sampleEventCards(){
      return this.$store.state.sampleEventCards;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload){
        this.$store.commit("toggleEditPost", payload);
      },
    },
  },
  beforeUnmount () {
    this.$store.commit("toggleEditPost", false);
  },
};
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

  .Eventcard {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 900px) {
  .Eventcard {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .Eventcard {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>