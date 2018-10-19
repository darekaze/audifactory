<template>
    <div>
      <h1>Register</h1>
      <input 
        type="email"
        name="email"
        v-model="email"
        placeholder="Email"
      >
      <br>
      <input 
        type="password"
        name="password"
        v-model="password"
        placeholder="password"
      >
      <br>
      <div class="error" v-html="error" />
      <br>
      <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthService from "@/services/Auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: white;
}
</style>
