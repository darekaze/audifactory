<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex xs3>
      <category-list/>
      <viewed-history-list v-if="isUserLoggedIn" class="mr-2 mt-2" />
    </v-flex>
    <v-flex :class="{
      xs10: !isUserLoggedIn,
      xs7: isUserLoggedIn
    }">
      <albums-search-bar />
      <albums-list />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import AlbumsSearchBar from '@/components/AlbumsSearchBar.vue';
import AlbumsList from '@/components/AlbumsList.vue';
import ViewedHistoryList from '@/components/ViewedHistoryList.vue';
import CategoryList from '@/components/CategoryList.vue';

export default {
  name: 'albumPage',
  components: {
    AlbumsSearchBar,
    AlbumsList,
    ViewedHistoryList,
    CategoryList,
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
