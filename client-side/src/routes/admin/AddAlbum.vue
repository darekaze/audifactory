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
      <v-textarea
        label="List of Songs"
        v-model="album.songs"
        prepend-icon="playlist_play"
      ></v-textarea>
      <v-textarea
        label="Description"
        v-model="album.description"
        prepend-icon="description"
      ></v-textarea>
      <v-btn color="primary" @click="add">Add Album</v-btn>
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
    async add() {
      try {
        await AlbumsService.post(this.album);
        this.$router.push('/albums');
      } catch (err) {
        // console.log(err);
      }
    },
  },
};
</script>
