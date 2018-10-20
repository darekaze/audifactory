<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">ALMS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/register">
        <span class="mr-2">Register</span>
        <v-icon>watch</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      //
    };
  },
};
</script>
