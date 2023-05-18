import { createStore } from 'vuex'; 


const store = createStore({
    state: {
        sampleEventCards: [
            {
              eventTitle: "Event Card #1",
              eventCoverPhoto: "stock-1",
              eventDate: "1. August, 2023",
            },
            {
              eventTitle: "Event Card #2",
              eventCoverPhoto: "stock-2",
              eventDate: "1. August, 2023",
            },
            {
              eventTitle: "Event Card #3",
              eventCoverPhoto: "stock-3",
              eventDate: "1. August, 2023",
            },
            {
              eventTitle: "Event Card #4",
              eventCoverPhoto: "stock-4",
              eventDate: "1. August, 2023",
            },
          ],
          editPost: null,
    },
    mutations: {
        toggleEditPost(state, payload) {
            state.editPost = payload;
            console.log(state.editPost)
        }
    },
  })

  export default store

