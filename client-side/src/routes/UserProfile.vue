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
import { mapState } from 'vuex';
import Panel from '@/components/Panel.vue';
import UserService from '@/services/User';

export default {
  data() {
    return {
      user: {
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
        const { updated } = (await UserService.update(this.user)).data;
        this.$store.dispatch('updateUser', this.user);
        if (!updated) throw new Error('Fail to update');
        alert('Personal information updated!'); // eslint-disable-line no-alert
        this.$router.push('/');
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
    }),
  },
  mounted() {
    if (!this.isUserLoggedIn) {
      this.$router.push('/');
      return;
    }
    this.user.address = this.$store.state.auth.user.address;
    this.user.name = this.$store.state.auth.user.name;
    this.user.phonenumber = this.$store.state.auth.user.phonenumber;
  },
};
</script>
