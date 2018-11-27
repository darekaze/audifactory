<template>
<div>
  <div class="a-title">
    {{album.title}}
  </div>
  <div class="a-artist">
    {{album.artist}}
  </div>
  <div class="a-sub blue--text">
    {{album.genre}}
  </div>
  <div class="a-sub">
    {{getPrice}}
  </div>
  <div class="success--text">
    Avaliability: {{album.stocks}}
  </div>

  <div v-if="isUserLoggedIn">
    <v-btn v-if="!love" @click="setLove" flat dark round color="pink">
      <v-icon>favorite_border</v-icon>
      Love It!
    </v-btn>
    <v-btn v-if="love" @click="unsetLove" flat dark round color="pink" >
      <v-icon>favorite</v-icon>
      Loved
    </v-btn>
    <v-btn flat dark round color="green" @click="addToCart">
      <v-icon>add_shopping_cart</v-icon>
      Add to cart
    </v-btn>
  </div>
  <div v-else>
    <p>Please Login or Register for more features</p>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import LoveService from '@/services/Loves';
import CartService from '@/services/Carts';
import currency from '@/filters/currency';

export default {
  props: [
    'album',
  ],
  data() {
    return {
      love: null,
    };
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
      user: state => state.auth.user,
    }),
    getPrice() {
      return currency.format(this.album.price / 100);
    },
  },
  watch: {
    async album() {
      if (!this.isUserLoggedIn) return;
      try {
        const loves = (await LoveService.index({
          albumId: this.album.id,
        })).data;
        if (loves.length) {
          [this.love] = loves;
        }
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
  },
  methods: {
    async setLove() {
      try {
        this.love = (await LoveService.post({
          albumId: this.album.id,
        })).data;
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
    async unsetLove() {
      try {
        await LoveService.delete(this.love.loveId);
        this.love = null;
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
    async addToCart() {
      try {
        this.item = (await CartService.post({
          albumId: this.album.id,
        })).data;
        this.$emit('done');
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.a-title {
  font-size: 30px;
}
.a-artist {
  font-size: 24px;
}
.a-sub {
  font-size: 18px;
}
</style>
