<template>
  <v-footer dark app absolute flat height="auto">
    <v-layout justify-center row wrap>
      <v-flex
        text-xs-center
        white--text
        xs12>
        &copy;2018 —
        <router-link to="/">
          Audifactory
        </router-link>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>

export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
  }),
};
</script>

<style lang="scss" scoped>
</style>
