<template>
<v-container fluid grid-list-md>
  <v-layout justify-center>
    <v-flex xs12>
      <v-data-iterator
        :items="albums"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        row wrap justify-center>
        <v-card
          slot="item"
          slot-scope="props"
          width="330px"
          class="ml-1 mr-1 mb-2"
          :to="{
            name: 'albums',
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
              <div class="title">{{ props.item.title }}</div>
              <div class="subheading">{{ props.item.artist }}</div>
              <div class="subheading blue--text">{{ props.item.genre }}</div>
              <div class="primary--text">
                {{getPrice(props.item.price)}} //
                <span class="success--text">
                  Availability: {{props.item.stocks}}
                </span>
              </div>
            </div>
          </v-card-title>
        </v-card>
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
      albums: [],
      rowsPerPageItems: [6, 12],
      pagination: {
        rowsPerPage: 6,
      },
      limit: 36,
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
        this.albums = (await AlbumsService.index(value, this.limit)).data;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
