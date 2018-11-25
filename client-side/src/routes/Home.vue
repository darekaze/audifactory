<template>
  <div id="home">
    <v-parallax
      dark
      :src="require('@/assets/home.jpg')"
      height="420">
      <v-layout
        align-center
        column
        justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Audifactory</h1>
        <h4 class="subheading">Buy your favorite album today!</h4>
      </v-layout>
    </v-parallax>
    <newly-list/>
  </div>
</template>

<script>
// Intended for highlights of our products
// @ is an alias to /src
import NewlyList from '@/components/NewlyList.vue';

export default {
  name: 'home',
  components: {
    NewlyList,
  },
};
</script>
