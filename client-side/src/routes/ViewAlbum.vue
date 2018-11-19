<template>
<v-container fluid>
  <v-layout>
    <v-flex xs6>
      <album-image :url="album.imageUrl"/>
    </v-flex>
    <v-flex xs6>
      <album-metadata :album="album"/>
    </v-flex>
  </v-layout>
  <album-detail
  :link="scLink"
  :songs="album.songs"
  :summary="album.description"
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
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route',
    ]),
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
