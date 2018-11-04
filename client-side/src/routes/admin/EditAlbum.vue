<template>
<v-layout justify-center>
  <v-flex xs3>
    <panel title="Album Metadata">
      <v-text-field
        label="Title"
        v-model="album.title"
        prepend-icon="title"
        required
      ></v-text-field>

      <v-text-field
        label="Artist"
        v-model="album.artist"
        prepend-icon="face"
        required
      ></v-text-field>

      <v-text-field
        label="Genre"
        v-model="album.genre"
        prepend-icon="loyalty"
        required
      ></v-text-field>

      <v-text-field
        label="Image URL"
        v-model="album.imageUrl"
        prepend-icon="photo"
        required
      ></v-text-field>

      <v-text-field
        label="SoundCloud ID"
        v-model="album.soundCloudId"
        prepend-icon="cloud"
      ></v-text-field>

      <v-text-field
        label="Stocks"
        v-model="album.stocks"
        prepend-icon="all_inbox"
        required
      ></v-text-field>
    </panel>
  </v-flex>
  <v-flex xs7>
    <panel title="Album details" class="ml-2">
      <v-text-field
        label="List of Songs"
        v-model="songs"
        prepend-icon="playlist_play"
        multi-line
      ></v-text-field>
      <v-text-field
        label="Description"
        v-model="description"
        prepend-icon="description"
        multi-line
      ></v-text-field>
      <v-btn color="primary" @click="save">Update Album</v-btn>
    </panel>
  </v-flex>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel.vue';
import AlbumsService from '@/services/Albums';

export default {
  data() {
    return {
      album: {
        title: null,
        artist: null,
        genre: null,
        imageUrl: null,
        soundCloudId: null,
        songs: null,
        stocks: null,
        loves: 0,
        description: null,
      },
    };
  },
  components: {
    Panel,
  },
  methods: {
    async save() {
      this.error = null;
      // eslint-disable-next-line
      const albumId = this.$store.state.route.params.albumId;
      try {
        await AlbumsService.put(this.album);
        this.$router.push(`/albums/${albumId}`);
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    try {
      // eslint-disable-next-line
      const albumId = this.$store.state.route.params.albumId;
      this.album = (await AlbumsService.show(albumId)).data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
