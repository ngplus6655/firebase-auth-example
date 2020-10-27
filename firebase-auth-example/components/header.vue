<template>
  <div>
    <nav class="navbar">
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <div v-if="isLoggedIn">
                <a
                    href="#"
                    class="button"
                    @click.prevent="logout"
                >
                    Log out
                </a>
              </div>
              <!-- loginしていない場合はLoginとsignupリンクを表示 -->
              <div v-else>
                <nuxt-link to="login" class="button">login</nuxt-link>
                <nuxt-link to="signup" class="button">signup</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>