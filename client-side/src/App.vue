<template>
<v-app>
  <t-header />
  <v-content>
    <v-container fluid>
      <router-view />
    </v-container>
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
