<template>
<v-toolbar class="indigo" dark app flat fixed>
  <v-toolbar-title class="text-uppercase mr-4" to="/">
    <router-link class="title font-weight-light" to="/">
      ALMS
    </router-link>
  </v-toolbar-title>

  <v-toolbar-items>
    <v-btn flat to="/albums">Explore</v-btn>
  </v-toolbar-items>

  <v-spacer></v-spacer>

  <v-toolbar-items v-if="$store.state.isUserLoggedIn">
    <v-btn flat icon to="/">
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn flat icon to="/">
      <v-icon>account_circle</v-icon>
    </v-btn>
    <v-btn flat @click="logout" to="/">Log Out</v-btn>
  </v-toolbar-items>

  <v-toolbar-items v-else>
    <v-btn flat to="/login">Login</v-btn>
    <v-btn flat to="/register">Sign Up</v-btn>
  </v-toolbar-items>

</v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
}
</style>
