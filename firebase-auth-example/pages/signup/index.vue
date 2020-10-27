<template>
  <div class="container">
    <!-- Email form -->
    <label class="label">Email</label>
    <input v-model="email" type="email" placeholder="Email">
    <!-- Password Form -->
    <label class="label">Password</label>
    <input  v-model="password" type="password" placeholder="Password">
    <button @click="signUp">Sign up</button>
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
    signUp() {
      let user = {
        email: this.email,
        password: this.password
      }
      // ストアでサインアップアクションを呼び出す
      this.$store.dispatch('signUp', user)
    }
  }
}
</script>

