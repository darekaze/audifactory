<template>
<v-layout justify-center>
  <v-flex xs6>
    <albums-search-bar />
    <albums-list />
  </v-flex>
</v-layout>
</template>

<script>
import AlbumsSearchBar from '@/components/AlbumsSearchBar.vue';
import AlbumsList from '@/components/AlbumsList.vue';

export default {
  name: 'albums',
  components: {
    AlbumsSearchBar,
    AlbumsList,
  },
};
</script>

<style lang="scss" scoped>
</style>
