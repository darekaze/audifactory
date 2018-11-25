<template>
<v-card>
  <v-img
    height="120px"
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
    <v-container fill-height fluid>
      <v-layout>
        <v-flex xs12 align-end d-flex>
          <span class="headline white--text">Sign in</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>

  <v-card-text>
    <div class="error" v-html="error" />
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        prepend-icon="email"
        type="email"
        label="Email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        prepend-icon="lock"
        type="password"
        label="Password"
        :rules="passwordRules"
        required
      ></v-text-field>
      <vue-recaptcha
        ref="recaptcha"
        @verify="onVerify"
        :sitekey="sitekey">
      </vue-recaptcha>
    </v-form>
  </v-card-text>

  <v-card-actions>
    <a class="link" @click="redirect">
      Forgot password?
    </a>
    <v-spacer></v-spacer>
    <v-btn
      color="primary"
      :disabled="!valid"
      @click="login">
      Login
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import AuthService from '@/services/Auth';

export default {
  data() {
    return {
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      error: null,
      valid: false,
      recaptchaResponse: null,
      sitekey: '6Lf4G2gUAAAAANVI2ndLFcJUrzGm7qXUGndJbT4r',
    };
  },
  components: {
    VueRecaptcha,
  },
  mounted() {
    this.valid = false;
  },
  methods: {
    async login() {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password,
        }, this.recaptchaResponse);
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$emit('done');
        this.$refs.form.reset();
      } catch (error) {
        this.error = error.response.data.error;
      } finally {
        this.recaptchaResponse = null;
        this.$refs.recaptcha.reset();
      }
    },
    redirect() {
      this.$router.push('/forgotpassword');
      this.$emit('done');
    },
    onVerify(response) {
      this.recaptchaResponse = response;
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
