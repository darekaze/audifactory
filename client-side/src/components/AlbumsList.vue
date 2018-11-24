<template>
<!-- Design will be changed in the future -->
<panel title="Albums">
  <div
  v-for="album in albums"
  :key="album.id"
  class="album">
    <v-layout>
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
          Stock: {{album.stocks}}
        </div>
        <div class="a-price">
          {{getPrice(album.price)}}
        </div>
        <v-btn
          color="primary"
          :to="{
            name: 'album',
            params: {
              albumId: album.id,
            },
          }">
          View
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img :src="album.imageUrl" alt="No Image.." class="a-image" />
      </v-flex>
    </v-layout>
  </div>
</panel>
</template>

<script>
import AlbumsService from '@/services/Albums';
import Panel from '@/components/Panel.vue';
import currency from '@/filters/currency';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      albums: null,
    };
  },
  methods: {
    getPrice(price) {
      return currency.format(price / 100);
    },
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.albums = (await AlbumsService.index(value)).data;
      },
    },
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
</style>
