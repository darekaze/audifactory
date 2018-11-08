<template>
<div id="album-view">
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
</div>
</template>

<script>
import AlbumsService from '@/services/Albums';
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
  async mounted() {
    const { albumId } = this.$store.state.route.params;
    this.album = (await AlbumsService.show(albumId)).data;
    this.scLink = `soundcloud://${this.album.soundCloudId}`;
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
