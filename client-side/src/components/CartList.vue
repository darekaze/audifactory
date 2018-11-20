<template>
  <panel title="Shopping Cart">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="albums">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{ props.item.title }}
        </td>
        <td class="text-xs-right">
          {{ props.item.price }}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex';
import CartService from '@/services/Carts';
import Panel from '@/components/Panel.vue';

export default {
  components: {
    Panel,
  },
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
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
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
