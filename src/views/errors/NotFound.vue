<template>
  <div class="container">
    <h1>Oops, it looks like the page you're looking for doesn't exist.</h1>
    <router-link to="/">Ir a home</router-link>
    <a href="#" @click="back">Home</a>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const back = () => {
      router.go(-1);
    };

    return { back };
  },
};
</script>
