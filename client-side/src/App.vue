<template>
<v-app>
  <t-header />
  <v-content>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-content>
  <t-footer />
</v-app>
</template>

<script>
import THeader from './components/THeader.vue';
import TFooter from './components/TFooter.vue';

export default {
  name: 'App',
  components: {
    THeader,
    TFooter,
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
