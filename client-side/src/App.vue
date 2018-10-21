<template>
<v-app>
  <t-header />
  <v-content>
    <v-container fluid>
      <router-view />
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import THeader from './components/THeader.vue';

export default {
  name: 'App',
  components: {
    THeader,
  },
  data() {
    return {
      //
    };
  },
};
</script>
