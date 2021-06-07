<template>
  <SidebarMenu :collapsed="collapsed" :menu="menu" :hideToggle="isNavbarMounted" />
</template>
<script>
import '@/assets/scss/custom-sidebar.scss';

import { SidebarMenu } from 'vue-sidebar-menu';

import {
  onMounted, ref, computed, watch,
} from 'vue';
import { mapGetters, useStore } from 'vuex';

import { debounce } from 'lodash';

export default {
  setup() {
    const store = useStore();
    const isOnMobile = ref(false);

    const onResize = () => {
      if (window.innerWidth <= 767) {
        isOnMobile.value = true;
        store.commit('Sidebar/toggleCollapse', true);
      } else {
        isOnMobile.value = false;
        store.commit('Sidebar/toggleCollapse', false);
      }
    };

    window.addEventListener('resize', debounce(onResize, 300));

    const collapsed = computed(() => store.state.Sidebar.collapsed);
    const isNavbarMounted = computed(() => store.state.Navbar.isMounted);

    onMounted(() => {
      onResize();
      document.body.classList.add('with-sidebar');
      store.commit('Sidebar/setMounted', true);
    });

    watch(collapsed, (value) => {
      console.log('asdsdd');
      document.body.classList[value ? 'add' : 'remove']('collapsed');
    });

    return {
      isOnMobile,
      onResize,
      collapsed,
      isNavbarMounted,
    };
  },
  components: {
    SidebarMenu,
  },
  computed: {
    ...mapGetters('Sidebar', ['menu']),
  },
};
</script>
