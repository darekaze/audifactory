<template>
<v-container fluid>
  <v-layout align-center justify-center>
    <v-flex xs11 sm7 md6 lg5 xl4>
      <v-card class="elevation-4">
        <v-img
          height="120px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout>
              <v-flex xs12 align-end d-flex>
                <span class="headline white--text">Find Your Account</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-text v-show="!response">
          <div class="error" v-html="error" />
          <v-form>
              Please enter your email address and phone number to search for your account
            <v-text-field
              v-model="email"
              prepend-icon="email"
              type="email"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="phonenumber"
              prepend-icon="phone"
              type="text"
              label="Phone number"
              required
            ></v-text-field>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="forgotpassword">Search</v-btn>
          </v-card-actions>
        </v-card-text>
        <v-card-text v-show="response">
          <div class="error" v-html="error" />
          Please enter your new password for {{this.email}}
          <v-form>
            <v-text-field
              v-model="password"
              prepend-icon="lock"
              type="password"
              label="Password"
              required
            ></v-text-field>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="resetpassword">Reset</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AuthService from '@/services/Auth';

export default {
  data() {
    return {
      email: '',
      phonenumber: '',
      error: null,
      response: null,
      password: '',
    };
  },
  methods: {
    async forgotpassword() {
      try {
        const response = await AuthService.forgotpassword({
          email: this.email,
          phonenumber: this.phonenumber,
        });
        if (response) {
          this.response = response;
          this.error = null;
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    async resetpassword() {
      try {
        const response = await AuthService.forgotpassword({
          email: this.email,
          password: this.password,
        });
        if (response) alert(JSON.stringify(response)); // eslint-disable-line
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
