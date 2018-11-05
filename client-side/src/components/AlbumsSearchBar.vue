<template>
    <v-text-field
    v-model="search"
    prepend-inner-icon="search"
    label="Search by album title, artist, or genre"
    class="mx-3"
    flat
    solo
  ></v-text-field>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search: _.debounce(async function update(value) {
      const route = { name: 'albums' };
      if (this.search !== '') {
        route.query = { search: value };
      }
      this.$router.push(route);
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
