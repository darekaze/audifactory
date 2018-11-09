<template>
<v-container fluid>
  <h2>Recommendation</h2>
    <v-item-group>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex
            v-for="n in 6"
            :key="n"
            xs8
            sm6
            md4
            lg2>
            <v-item>
              <v-card
                slot-scope="{ active, toggle }"
                :selected="active"
                @click="toggle"
                class="d-flex align-center"
                dark
                height="200"
              >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              >
              </v-img>
              </v-card>
            </v-item>
          </v-flex>
        </v-layout>
      </v-container>
    </v-item-group>
</v-container>
</template>

<script>
export default {
};
</script>

<style scoped>
</style>
