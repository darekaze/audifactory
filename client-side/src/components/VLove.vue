<template>
<v-container fluid grid-list-md>
  <h2 class="pb-3">New Arrival</h2>
  <v-data-iterator
    :items="albums"
    :rows-per-page-items="rowsPerPageItems"
    :pagination.sync="pagination"
    content-tag="v-layout"
    row wrap justify-center>
    <v-flex
      slot="item"
      slot-scope="props"
      >
      <v-card
        width="300px"
        :to="{
            name: 'album',
            params: {
              albumId: props.item.id,
            },
          }">
        <v-img
          :src="props.item.imageUrl"
          height="300px">
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ props.item.title }}</div>
            <span class="orange--text">{{getPrice(props.item.price)}}</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-data-iterator>
  <v-layout></v-layout>
</v-container>
</template>

<script>
import AlbumsService from '@/services/Albums';
import currency from '@/filters/currency';

export default {
  data() {
    return {
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 8,
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
    this.albums = (await AlbumsService.index('')).data;
  },
};
</script>

<style lang="scss" scoped>
</style>
