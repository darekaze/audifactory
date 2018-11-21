<template>
  <panel title="Loves">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="loves">
      <template slot="items" slot-scope="props">
        <td class="text-xs">
          {{ props.item.title }}
        </td>
        <td class="text-xs">
          {{ props.item.artist }}
        </td>
        <td class="text-xs-right">
          <v-btn
            color="primary"
            :to="{
              name: 'album',
              params: {
                albumId: props.item.id,
              },
            }">
            View
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex';
import LoveService from '@/services/Loves';
import Panel from '@/components/Panel.vue';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Artist',
          value: 'artist',
        },
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true,
      },
      loves: [],
    };
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
      user: state => state.auth.user,
    }),
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.loves = (await LoveService.index()).data;
    }
  },
};
</script>

<style scoped>
</style>
