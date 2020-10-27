<template>
 <!--loginしている場合ログアウトボタンを表示  -->
  <div v-if="isLoggedIn">
    <a
        href="#"
        class="button is-light"
        @click.prevent="logout"
    >
        Log out
    </a>
</div>
</template>

<script>
export default {
  computed: {
    // ログイン判定
    isLoggedIn() {
      return !this.$store.getters.isLoggedIn
    }
  },
  methods: {
    // logoutアクションを呼び出す
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>