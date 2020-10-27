<template>
  <div class="container">
    <!-- Email form -->
    <label class="label">Email</label>
    <input v-model="email" type="email" placeholder="Email">
    <!-- Password Form -->
    <label class="label">Password</label>
    <input v-model="password" type="password" placeholder="Password">
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      let user = {
        email: this.password,
        password: this.password,
      }
      this.$store.dispatch("login", user)
    }
  }
}
</script>