<template>
<v-layout align-center justify-center>
  <v-flex xs11 sm7 md6 lg5 xl4>
    <v-card class="elevation-4">
      <v-img
        height="120px"
        src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
      >
        <v-container fill-height fluid>
          <v-layout>
            <v-flex xs12 align-end d-flex>
              <span class="headline white--text">Sign up</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <v-card-text>
        <div class="error" v-html="error" />
        <v-form>
          <v-text-field
            v-model="name"
            prepend-icon="person"
            type="text"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            prepend-icon="email"
            type="text"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            prepend-icon="lock"
            type="password"
            label="Password"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <router-link class="link" to="/login">
          Have an account?
        </router-link>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="register">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import AuthService from '@/services/Auth';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  font-size: 1.1em;
  padding-left: 15px;
  text-decoration: none;
}
.error {
  color: white;
  border-radius: 4px;
  padding-left: 4px;
}
</style>
