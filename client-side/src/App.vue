<template>
<v-app>
  <t-header />
  <v-content>
    <router-view />
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
  data() {
    return {
      //
    };
  },
};
</script>
