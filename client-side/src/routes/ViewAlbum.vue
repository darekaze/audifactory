<template>
<div id="album-details">
  <v-layout>
    <v-flex xs6>
      <img :src="album.imageUrl" alt="" class="a-image" />
    </v-flex>
    <v-flex xs6>
      <div class="a-title">
        {{album.title}}
      </div>
      <div class="a-artist">
        {{album.artist}}
      </div>
      <div class="a-genre">
        {{album.genre}}
      </div>
      <div class="a-stocks">
        {{album.stocks}}
      </div>
      <div class="a-loves">
        {{album.loves}}
      </div>
        Highlight Track Preview
        <div v-if="scLink">
          <vue-media-embed :source="scLink" showUser="1" />
        </div>
    </v-flex>
    <!-- TODO: Use v-list to show song tracks -->
    <!-- TODO: Add embed soundcloud player (as a separated component) -->
  </v-layout>
</div>
</template>

<script>
import AlbumsService from '@/services/Albums';

export default {
  data() {
    return {
      album: {},
      scLink: '',
    };
  },
  async mounted() {
    // eslint-disable-next-line
    const albumId = this.$store.state.route.params.albumId;
    this.album = (await AlbumsService.show(albumId)).data;
    this.scLink = `soundcloud://${this.album.soundCloudId}`;
  },
};
</script>

<style lang="scss" scoped>
.album {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.a-title {
  font-size: 30px;
}
.a-artist {
  font-size: 24px;
}
.a-genre {
  font-size: 18px;
}
.a-image {
  width: 95%;
  margin: 0 auto;
}
.player {
  width: 400px;
  height: 100px;
}
</style>
