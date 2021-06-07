<template>
  <Navbar :logo="efLogo" />
  <div class="container">
    <Sidebar />
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

import Sidebar from '@/views/layouts/components/Sidebar.vue';
import Navbar from '@/views/layouts/components/Navbar.vue';

import { useStore } from 'vuex';

import axios from 'axios';

import efLogo from '@/assets/logo_enviaflores.png';

library.add(faUser);
library.add(faUsers);

export default {
  setup() {
    const store = useStore();

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.data)
      .then((data) => {
        const header = [{
          header: 'Menú',
          hiddenOnCollapse: true,
        }];

        const users = data.map((user) => ({
          title: user.name,
          href: '/',
          icon: {
            element: 'font-awesome-icon',
            attributes: {
              icon: 'user',
            },
          },
        }));

        return [
          ...header,
          ...users,
        ];
      }).then((menu) => {
        store.commit('Sidebar/setMenu', menu);
      });

    return { efLogo };
  },
  components: {
    Sidebar,
    Navbar,
  },
};
</script>
