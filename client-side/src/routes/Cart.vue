<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex xs10 v-if="isUserLoggedIn">
      <h2 class="ml-2">Checkout</h2>
      <cart-list class="mr-2 mt-4" />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import CartList from '@/components/CartList.vue';

export default {
  name: 'cart',
  components: {
    CartList,
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
