<template>
  <v-layout justify-center>
    <v-flex xs8 sm6 md4>
      <v-card flat>
        <v-img>
          <vue-media-embed
            v-if="!!(link)"
            :source="link"
            :showUser="author"
          />
        </v-img>
      <v-card-title>{{ summary }}</v-card-title>
      </v-card>

      <v-list>
        <v-subheader>Songs List</v-subheader>
        <v-list-tile
          v-for="(song, index) in songs"
          :key="index"
          avatar
          @click="1">
          <v-list-tile-avatar>
            {{ index }}.
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="song"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'link',
    'songs',
    'summary',
  ],
  data() {
    return {
      author: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
