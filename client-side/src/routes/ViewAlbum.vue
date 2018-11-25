<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex xs6 sm5 md4>
      <album-image :url="album.imageUrl"/>
    </v-flex>
    <v-flex xs6 sm5 md4>
      <album-metadata :album="album"/>
    </v-flex>
  </v-layout>
  <album-detail
  :link="scLink"
  :songs="album.songs"
  :summary="album.description"
  class="mt-5"
  />
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import AlbumsService from '@/services/Albums';
import AlbumHistoryService from '@/services/AlbumHistory';

import AlbumImage from '@/components/AlbumImage.vue';
import AlbumMetadata from '@/components/AlbumMetadata.vue';
import AlbumDetail from '@/components/AlbumDetail.vue';

export default {
  data() {
    return {
      album: {},
      scLink: '',
    };
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
      user: state => state.auth.user,
      route: state => state.route,
    }),
  },
  async mounted() {
    const { albumId } = this.route.params;
    this.album = (await AlbumsService.show(albumId)).data;
    this.scLink = `soundcloud://${this.album.soundCloudId}`;

    if (this.isUserLoggedIn) {
      AlbumHistoryService.post({ albumId });
    }
  },
  components: {
    AlbumImage,
    AlbumMetadata,
    AlbumDetail,
  },
};
</script>

<style lang="scss" scoped>
</style>
