<template>
<v-container fluid grid-list-md>
  <h2>Newly Added</h2>
  <v-data-iterator
    :items="albums"
    :rows-per-page-items="rowsPerPageItems"
    :pagination.sync="pagination"
    content-tag="v-layout"
    row wrap>
    <v-flex
      slot="item"
      slot-scope="props"
      xs12 sm6 md4 lg3>
      <v-card>
        <v-card-title><h4>{{ props.item.title }}</h4></v-card-title>
        <v-divider></v-divider>
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
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.albums = (await AlbumsService.index(value)).data;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
