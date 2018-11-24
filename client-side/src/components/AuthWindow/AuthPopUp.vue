<template>
<v-layout align-center>
  <v-dialog v-model="dialog" max-width="460px">
    <v-btn flat slot="activator" dark>Login / Sign up</v-btn>
    <v-tabs
      color="cyan"
      slider-color="yellow"
      dark right
    >
      <v-tab ripple>
        Login
      </v-tab>
      <v-tab ripple>
        Sign Up
      </v-tab>
      <v-tab-item>
        <login-form @done="dialog = false"/>
      </v-tab-item>
      <v-tab-item>
        <sign-up-form @done="dialog = false"/>
      </v-tab-item>
    </v-tabs>
  </v-dialog>
</v-layout>
</template>

<script>
import LoginForm from './LoginForm.vue';
import SignUpForm from './SignUpForm.vue';

export default {
  name: 'AuthPopUp',
  components: {
    LoginForm,
    SignUpForm,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
