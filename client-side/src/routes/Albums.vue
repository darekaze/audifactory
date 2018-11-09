<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex xs6>
      <love-list class="mr-2 mt-4" />
    </v-flex>
    <v-flex xs6>
      <albums-search-bar />
      <albums-list class="mt-2"/>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AlbumsSearchBar from '@/components/AlbumsSearchBar.vue';
import AlbumsList from '@/components/AlbumsList.vue';
import LoveList from '@/components/LoveList.vue';

export default {
  name: 'albums',
  components: {
    AlbumsSearchBar,
    AlbumsList,
    LoveList,
  },
};
</script>

<style lang="scss" scoped>
</style>
