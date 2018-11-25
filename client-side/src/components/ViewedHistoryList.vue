<template>
<v-data-table
  :headers="headers"
  :pagination.sync="pagination"
  :items="albums"
  hide-actions
  :total-items="8">
  <template slot="items" slot-scope="props">
    <td class="text-xs">
      <router-link :to="{
        name: 'album',
        params: {
          albumId: props.item.AlbumId,
        },
      }">
      {{ props.item.title }}
      </router-link>
    </td>
  </template>
</v-data-table>
</template>

<script>
import { mapState } from 'vuex';
import AlbumHistoryService from '@/services/AlbumHistory';

export default {
  data() {
    return {
      headers: [
        {
          text: 'Recently Viewed',
          value: 'title',
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
      this.albums = (await AlbumHistoryService.index()).data;
    }
  },
};
</script>

<style scoped>
</style>
