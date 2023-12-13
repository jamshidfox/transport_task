/** @format */

import { createApp } from 'vue';
import App from './App.vue';
import router from './components/Router';
import store from './store';
import './assets/css/main.css';
const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#vue-app');
