<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <div class="error" v-html="error" />
        <v-form>
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
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="login">Login</v-btn>
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
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthService.login({
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
.error {
  color: white;
  border-radius: 4px;
  padding-left: 4px;
}
</style>
