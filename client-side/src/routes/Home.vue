<template>
  <div id="home">
    <v-parallax
      dark
      :src="require('@/assets/section.jpg')"
      height="380">
      <v-layout
        align-center
        column
        justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Audifactory</h1>
        <h4 class="subheading">Buy your favorite album today!</h4>
      </v-layout>
    </v-parallax>
    <v-love/>
  </div>
</template>

<script>
// Intended for highlights of our products
// @ is an alias to /src
import VLove from '@/components/VLove.vue';

export default {
  name: 'home',
  components: {
    VLove,
  },
};
</script>
