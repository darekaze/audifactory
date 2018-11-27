<template>
<v-container fluid>
  <v-btn @click="goBack" flat dark round color="pink" >
    <v-icon>arrow_back_ios</v-icon>
    Back
  </v-btn>
  <v-layout justify-center>
    <v-flex xs6 sm5 md4>
      <album-image :url="album.imageUrl"/>
    </v-flex>
    <v-flex xs6 sm5 md4>
      <album-metadata :album="album" @done="dialog = true"/>
    </v-flex>
  </v-layout>
  <album-detail
  :link="scLink"
  :songs="album.songs"
  :summary="album.description"
  class="mt-5"
  />
  <v-dialog
    v-model="dialog"
    max-width="290">
    <v-card>
      <v-card-text>
        Added 1 item to cart!
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          flat="flat"
          @click="goBack">
          Back to Explore
        </v-btn>
        <v-btn
          color="green darken-1"
          flat="flat"
          @click="dialog = false">
          Continue
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
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
      dialog: false,
    };
  },
  methods: {
    goBack() {
      this.dialog = false;
      this.$router.go(-1);
    },
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
