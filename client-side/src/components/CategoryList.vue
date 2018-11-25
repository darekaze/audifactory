<template>
<v-data-table
  :headers="headers"
  :pagination.sync="pagination"
  :items="categories"
  hide-actions
  class="mb-3">
  <template slot="items" slot-scope="props">
    <td>
      <router-link
        class=""
        :to="{
          name: 'albums',
          query: {
            search: props.item.title,
          },
        }">
      {{ props.item.title }}
      </router-link>
    </td>
  </template>
</v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Category',
          value: 'title',
        },
      ],
      pagination: {
        descending: false,
      },
      categories: [
        { title: 'Hardcore' },
        { title: 'Electro' },
        { title: 'Pop' },
        { title: 'Rock' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
