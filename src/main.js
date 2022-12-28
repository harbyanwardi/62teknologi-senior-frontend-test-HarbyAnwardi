import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'

let app = createApp(App);

app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDLIQlEp_G9zb72Z6ItUyYxeWreu2H9LEo",
  },
});

app.mount("#app");
