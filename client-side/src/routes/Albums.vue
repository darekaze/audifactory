<template>
  <v-layout column>
    <v-flex xs6>
      <panel title="Albums">
        <div v-for="album in albums" :key="album.id">
          {{album.title}}
          {{album.artist}}
          {{album.stocks}}
          $ {{album.price}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import AlbumsService from '@/services/Albums';
import Panel from '@/components/Panel.vue';

export default {
  name: 'albums',
  components: {
    Panel,
  },
  data() {
    return {
      albums: null,
    };
  },
  async mounted() {
    // request all songs
    this.albums = (await AlbumsService.index()).data;
    console.log('songs', this.albums);
  },
};
</script>
