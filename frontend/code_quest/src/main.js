import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from './fontawesome';

// createApp(App).use(router).mount('#app')

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount('#app');