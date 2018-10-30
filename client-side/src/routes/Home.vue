<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script>
// Intended for highlights of our products
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
