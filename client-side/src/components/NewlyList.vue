<template>
<v-container fluid grid-list-md>
  <v-layout justify-center>
    <v-flex xs10>
      <v-data-iterator
        :items="albums"
        :pagination.sync="pagination"
        hide-actions
        content-tag="v-layout"
        row wrap justify-center>
        <h2 slot="header" class="ml-4 pb-3">New Arrival</h2>
        <v-card
          slot="item"
          slot-scope="props"
          width="280px"
          class="ml-2 mr-2 mb-2"
          :to="{
            name: 'album-view',
            params: {
              albumId: props.item.id,
            },
          }">
          <v-img
            :src="props.item.imageUrl"
            height="260px">
          </v-img>
          <v-card-title primary-title>
            <div>
              <div class="title">{{ props.item.title }}</div>
              <div class="subheading">{{ props.item.artist }}</div>
              <span class="primary--text">{{getPrice(props.item.price)}}</span>
            </div>
          </v-card-title>
        </v-card>
        <div slot="no-data">
          <v-progress-circular
            indeterminate
            color="pink">
          </v-progress-circular>
        </div>
      </v-data-iterator>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AlbumsService from '@/services/Albums';
import currency from '@/filters/currency';

export default {
  data() {
    return {
      pagination: {
        rowsPerPage: 10,
        totalItems: 10,
      },
      albums: [],
    };
  },
  methods: {
    getPrice(price) {
      return currency.format(price / 100);
    },
  },
  async mounted() {
    this.albums = (await AlbumsService.index()).data;
  },
};
</script>

<style lang="scss" scoped>
</style>
