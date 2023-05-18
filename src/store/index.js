import { createStore } from 'vuex'; 
import router from '../router';
import { auth } from '../firebase/firebaseInit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const store = createStore({
    state: {
        user: null,
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
        },

        SET_USER (state, user) {

        },
        CLEAR_USER (state) {
          state.user = null
        },
    },
    actions: {
      async login ({commit}, details) {
        const {email, password} = details

        try{
          await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
          switch (error.code) {
            case 'auth/user-not-found':
              alert ("Bruger findes ikke")
              break
            case 'auth/wrong-password':
              alert ("Forkert Adgangskode")
              break
              default: 
              alert("Noget gik galt!")
          }
          return 
        }
        commit('SET_USER', auth.currentUser)

        router.push('/')
      },
      async register ({commit}, details) {
        const {email, password} = details

        try{
          await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
          switch (error.code) {
            case 'auth/email-already-in-use':
              alert ("Email er allerede i brug")
              break
              case 'auth/invalid-email':
                alert ("Forkert email")
                break
                case 'auth/operation-not-allowed':
                  alert ("Betjening ikke tilladt")
                  break
              default: 
              alert("Noget gik galt!")
          }
          return 
        }
        commit('SET_USER', auth.currentUser)

        router.push('/')
      },
      async logout ({commit}) {
        await signOut(auth)

        commit('CLEAR_USER')

        router.push('/login')
      },
    },
  })

  export default store
