import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import defaultLayout from '@/views/layouts/Default.vue';
import emptyLayout from '@/views/layouts/Empty.vue';

import App from './App.vue';
import store from './store';
import router from './router';

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('default-layout', defaultLayout)
  .component('empty-layout', emptyLayout)
  .mount('#app');
