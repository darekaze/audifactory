<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex xs10 v-if="isUserLoggedIn">
      <love-list class="mr-2 mt-4" />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import LoveList from '@/components/LoveList.vue';

export default {
  name: 'loves',
  components: {
    LoveList,
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
    }),
  },
};
</script>

<style>
</style>
