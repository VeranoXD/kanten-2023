<template>
  <div class="event-card flex flex-col relative bg-white rounded-lg ">
    <div v-if="editPost" class="icons flex absolute top-2 right-2 z-30 space-x-4">
      <div class="icon flex justify-center items-center rounded-full p-1 bg-white hover:bg-gray-200">
        <!-- EDIT ICON -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-edit"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
          ></path>
          <path
            d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
          ></path>
          <path d="M16 5l3 3"></path>
        </svg>
      </div>
      <div class="icon flex justify-center items-center rounded-full p-1 bg-white hover:bg-gray-200">
        <!-- DELETE ICON -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-trash"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 7l16 0"></path>
          <path d="M10 11l0 6"></path>
          <path d="M14 11l0 6"></path>
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
        </svg>
      </div>
    </div>
     <img class="block rounded-lg w-full z-3" :src="`../src/assets/eventCards/${event.eventCoverPhoto}.png`" alt=""/>  
    <div class="info">
        <h4 class=" font-bold py-2">{{ event.eventTitle }}</h4>
        <h6 class="font-light text-sm py-1"> Oprettet den: {{ event.eventDate }}</h6>
        <router-link class="mt-auto inline-flex items-center py-2" to="#">
            Se Event
        </router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: "eventCard",
  props: ["event"],
  computed: {
    editPost(){
      return this.$store.state.editPost;
    }
  },
};

</script>

<style>
@media screen and (min-width: 375px){
  .event-cards{
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (min-width: 500px) {
  .event-card-wrap{
    padding: 100px 16px;
  }

  .event-cards{
    grid-template-columns: repeat(2, 1fr);
  }

}

@media screen and (min-width: 900px){
  .event-cards{
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1200px){
  .event-cards{
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>