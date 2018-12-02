<template>
<v-toolbar class="indigo" dark app flat fixed>
  <v-toolbar-title class="text-uppercase mr-4" to="/">
    <router-link class="title font-weight-light" to="/">
      A=ft
    </router-link>
  </v-toolbar-title>

  <v-toolbar-items>
    <v-btn flat to="/albums">Explore</v-btn>
  </v-toolbar-items>

  <v-spacer></v-spacer>

  <v-toolbar-items v-if="isUserLoggedIn">
    <v-btn flat icon to="/purchase-history">
      <v-icon>history</v-icon>
    </v-btn>
    <v-btn flat icon to="/cart">
      <v-icon>shopping_cart</v-icon>
    </v-btn>
    <v-btn flat icon to="/loves">
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn flat icon to="/userprofile">
      <v-icon>account_circle</v-icon>
    </v-btn>
    <v-btn flat @click="logout">Log Out</v-btn>
  </v-toolbar-items>

  <v-toolbar-items v-else>
    <auth-pop-up/>
  </v-toolbar-items>

</v-toolbar>
</template>

<script>
import { mapState } from 'vuex';
import AuthPopUp from '@/components/AuthWindow/AuthPopUp.vue';

export default {
  name: 'THeader',
  components: {
    AuthPopUp,
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
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
