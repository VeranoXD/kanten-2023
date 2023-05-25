  import { createStore } from 'vuex'; 
  import router from '../router';
  import { auth } from '../firebase/firebaseInit';
  import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
  import { db } from "../firebase/firebaseInit";

  import { ref } from 'vue';

  export const todos = ref([]);

  const store = createStore({
      state: {
          sampleEventCards: [

            ],
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

        async getPost({state}) {
          const dataBase = await db.collection('eventPosts').orderBy('date', 'desc')
          const dbResults = await dataBase.get();
          dbResults.forEach((doc) => {
            if (!state.eventPosts.some(event => event.eventID === doc.id)) {
              const data = { 
                eventID: doc.data().eventID,
                eventHTML: doc.data().eventHTML,
                eventCoverPhoto: doc.data().eventCoverPhoto,
                eventTitle: doc.data().eventTitle,
                eventDate: doc.data().eventDate,
              }
              state.eventPosts.push(data);
            }
          })
          state.eventLoaded = true;
        },
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

