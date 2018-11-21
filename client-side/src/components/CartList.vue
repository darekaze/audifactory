<template>
  <v-data-table
    :headers="headers"
    :pagination.sync="pagination"
    :items="albums">
    <template slot="items" slot-scope="props">
      <td class="text-xs">
        {{ props.item.title }}
      </td>
      <td class="text-xs">
        {{ props.item.price }}
      </td>
      <td class="text-xs-right">
        <v-btn
          color="primary"
          :to="{
            name: 'album',
            params: {
              albumId: props.item.id,
            },
          }">
          View
        </v-btn>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { mapState } from 'vuex';
import CartService from '@/services/Carts';

export default {
  data() {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Price',
          value: 'price',
        },
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true,
      },
      albums: [],
    };
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
      user: state => state.auth.user,
    }),
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.albums = (await CartService.index()).data;
    }
  },
};
</script>

<style scoped>
</style>
