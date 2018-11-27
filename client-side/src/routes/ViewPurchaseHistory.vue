<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex xs8 v-if="isUserLoggedIn">
      <h2 class="mb-4">Purchase History</h2>
      <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="albums">
        <template slot="items" slot-scope="props">
          <td class="text-xs">
            <router-link :to="{
              name: 'album-view',
              params: {
                albumId: props.item.AlbumId,
              },
            }">
            {{ props.item.title }}
            </router-link>
          </td>
          <td class="text-xs">
            {{ dateFormat(props.item.createdAt) }}
          </td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="cyan">
            You haven't purchase anything yet...
          </v-alert>
        </template>
      </v-data-table>
    </v-flex>
    <v-flex xs8 v-else>
      <h3>Please Login to use this function</h3>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import PurchaseHistoryService from '@/services/Purchase';
import formatDate from '@/filters/date';

export default {
  name: 'purchase-history',
  data() {
    return {
      headers: [
        {
          text: 'Purchased Item',
          align: 'left',
          sortable: false,
          value: 'title',
        },
        {
          text: 'Purchased At',
          value: 'time',
        },
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true,
      },
      albums: [],
    };
  },
  methods: {
    dateFormat(time) {
      return formatDate(time);
    },
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
      user: state => state.auth.user,
    }),
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.albums = (await PurchaseHistoryService.index()).data;
    }
  },
};
</script>
