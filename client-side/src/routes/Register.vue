<template>
<v-content>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                prepend-icon="email"
                name="login"
                label="Email"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="password"
                prepend-icon="lock"
                name="password"
                type="password"
                label="Password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="register">Register</v-btn>
          </v-card-actions>
        </v-card>
        <div class="error" v-html="error" />
      </v-flex>
    </v-layout>
  </v-container>
</v-content>
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
    async register() {
      try {
        await AuthService.register({
          email: this.email,
          password: this.password,
        });
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
}
</style>
