import 'normalize.css/normalize.css';
import '@/styles/index.scss';

import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

// permission
import './permission';

const app = createApp(App);

// import element-ui
import element from './element';
element(app);

app.use(router).use(store).mount('#app');
