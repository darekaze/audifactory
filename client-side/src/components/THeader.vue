<template>
<v-toolbar class="indigo" dark app fixed>
  <v-toolbar-title class="text-uppercase mr-4" to="/">
    <router-link class="title font-weight-light" to="/">
      ALMS
    </router-link>
  </v-toolbar-title>
  <v-toolbar-items>
    <v-btn flat>
      Browse (WIP)
    </v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
  <v-btn flat to="/login">
    Login
  </v-btn>
  <v-btn flat to="/register">
    Sign Up
  </v-btn>
</v-toolbar>
</template>

<script>
export default {

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

