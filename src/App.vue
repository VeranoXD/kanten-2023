<template>
  <div class="app">
    <NavigationTop v-if="!navigation"></NavigationTop>
    <RouterView />
    <Footer v-if="!navigation"></Footer>
<!--     <Newsletter></Newsletter> -->
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import HjemVue from './views/Hjem.vue';
import NavigationTop from "./components/NavigationTop.vue";
import Newsletter from './components/Newsletter.vue';

export default {
  name: "app",
  components: { Navigation, Footer, NavigationTop, Newsletter },
  data() {
    return {
      navigation: null,
      isLoggedIn: false,
      showLogin: true,
      displayName: ''
    };
  },
/*   created() {
    this.checkRoute();
    this.$store.dispatch("getPost")
  }, */
  mounted() {},
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "register" ||
        this.$route.name === "GlemtAdgangskode"
      ) {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

#app {
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}

@media screen and (min-width: 375px) {
  .event-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (min-width: 500px) {
  .event-card-wrap {
    padding: 100px 16px;
  }

  .event-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (min-width: 900px) {
  .event-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .event-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>