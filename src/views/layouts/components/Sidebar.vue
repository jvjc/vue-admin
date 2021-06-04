<template>
  <div>
    <SidebarMenu :menu="menu"/>
  </div>
</template>
<script>
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import { SidebarMenu } from 'vue-sidebar-menu';

import { mapGetters } from 'vuex';

export default {
  setup() {
  },
  components: {
    SidebarMenu,
  },
  computed: {
    ...mapGetters('Sidebar', ['menu']),
  },
};
</script>
