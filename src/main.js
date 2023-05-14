import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router'
// Import the functions you need from the SDKs you need


const app = createApp(App);


app.use(router);

app.mount('#app');
