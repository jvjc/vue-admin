<template>
  <nav class="navbar sticky-top navbar-primary bg-primary shadow">
    <div class="container-fluid">
      <transition name="fade">
        <div class="col brand-menu" v-show="!collapsed">
          <div class="d-flex justify-content-between align-items-center">
            <a class="navbar-brand" href="#">
              <img :src="logo" alt="logo" height="24">
            </a>
          </div>
        </div>
      </transition>
      <div class="col ps-2 navbar-center">
          <div class="hamburger hamburger--arrow-r js-hamburger"
            @click="toggleSideBar"
            v-show="isSidebarMounted"
            :class="{ 'is-active': collapsed }"
          >
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
      </div>
    </div>
  </nav>
</template>
<script>
import defaultLogo from '@/assets/logo.png';

import '@/assets/scss/custom-navbar.scss';
import '@/assets/scss/custom-hamburguers.scss';

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    logo: {
      type: String,
      default: defaultLogo,
    },
  },
  setup() {
    const store = useStore();

    const collapsed = computed(() => store.state.Sidebar.collapsed);
    const isSidebarMounted = computed(() => store.state.Sidebar.isMounted);

    const toggleSideBar = () => {
      store.commit('Sidebar/toggleCollapse');
    };

    onMounted(() => {
      store.commit('Navbar/setMounted', true);
    });

    return { collapsed, toggleSideBar, isSidebarMounted };
  },
};
</script>
