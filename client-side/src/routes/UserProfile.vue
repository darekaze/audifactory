<template>
<v-layout justify-center mt-4 mb-4>
  <v-flex xs12 sm10 md8 lg6>
    <panel title="User profile">
      <v-text-field
        label="Name"
        v-model="user.name"
        prepend-icon="face"
        required
      ></v-text-field>

      <v-text-field
        label="Phone No."
        v-model="user.phonenumber"
        prepend-icon="phone_android"
        required
      ></v-text-field>

      <v-textarea
        label="Shipping Address"
        v-model="user.address"
        prepend-icon="home"
      ></v-textarea>

      <v-btn color="primary" @click="save">Update</v-btn>
    </panel>
  </v-flex>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel.vue';
import UserService from '@/services/User';

export default {
  data() {
    return {
      user: {
        email: null,
        name: null,
        phonenumber: null,
        address: null,
      },
    };
  },
  components: {
    Panel,
  },
  methods: {
    async save() {
      try {
        const updatedUser = (await UserService.put(this.user)).data;
        // Update vuex store user data
        // 后端把密码删了，然后给updatedUser然后给vuex auth.user
        this.$router.push('/');
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
  },
  mounted() {
    // ↓过滤user，只要name,addr,phone
    this.user = this.$store.state.auth.user;
  },
};
</script>
