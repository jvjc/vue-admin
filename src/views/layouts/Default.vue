<template>
  <div class="container">
    <Sidebar/>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/form">Form</router-link>
    <div class="header">Header</div>
    <slot></slot>
    <div class="footer">Footer</div>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import Sidebar from '@/views/layouts/components/Sidebar.vue';

import { useStore } from 'vuex';

library.add(faUser);
library.add(faUsers);

export default {
  setup() {
    const store = useStore();

    setTimeout(() => {
      store.commit('Sidebar/setMenu', [
        {
          header: 'Main Navigation',
          hiddenOnCollapse: true,
        },
        {
          href: '/',
          title: 'Home',
          icon: {
            element: 'font-awesome-icon',
            attributes: {
              icon: 'user',
            },
          },
        },
        {
          title: 'About Us',
          icon: {
            element: 'font-awesome-icon',
            attributes: {
              icon: 'users',
            },
          },
          child: [
            {
              href: '/about',
              title: 'Sub Link',
            },
          ],
        },
      ]);
    }, 50);
  },
  components: {
    Sidebar,
  },
};
</script>
