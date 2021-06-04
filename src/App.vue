<template>
  <div class="container">
    <component :is="layout">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </component>
  </div>
</template>
<script>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const defaultLayout = 'default';
    const defaultTitle = 'Enviaflores.com';
    const route = useRoute();

    const layout = ref('');

    watch(
      () => route.meta,
      async (meta) => {
        document.title = meta?.title || defaultTitle;
        layout.value = `${meta?.layout || defaultLayout}-layout`;
      },
      { immediate: true },
    );

    return { layout };
  },
};
</script>
