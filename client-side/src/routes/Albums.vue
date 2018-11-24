<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex xs3 v-if="isUserLoggedIn">
      <viewed-history-list class="mr-2 mt-4" />
    </v-flex>
    <v-flex :class="{
      xs10: !isUserLoggedIn,
      xs7: isUserLoggedIn
    }">
      <albums-search-bar />
      <albums-list class="mt-2"/>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import AlbumsSearchBar from '@/components/AlbumsSearchBar.vue';
import AlbumsList from '@/components/AlbumsList.vue';
import ViewedHistoryList from '@/components/ViewedHistoryList.vue';

export default {
  name: 'albums',
  components: {
    AlbumsSearchBar,
    AlbumsList,
    ViewedHistoryList,
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>
