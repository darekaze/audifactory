<template>
  <v-layout column>
    <v-flex xs6>
      <panel title="Albums">
        <div v-for="album in albums" :key="album.id">
          {{album.title}}
          {{album.artist}}
          {{album.stocks}}
          {{album.loves}}
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
    this.albums = (await AlbumsService.index()).data;
  },
};
</script>
