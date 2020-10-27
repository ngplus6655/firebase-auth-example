import firebase from "~/plugins/firebase"

export const state = () => ({
  token: '',
})

export const actions = {

  // 非同期として実装 payloadはuserが入っている
  // commit, dispatchはcontextに入っている。引数をオブジェクト
  // の中から取り出すのをargument destructingと呼ぶ
  async signUp({commit, dispatch}, payload) {
    // アカウントを作成
    await firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
    // ログイン
    const res = await firebase.auth().
         signInWithEmailAndPassword(
            payload.email,
            payload.password
           )
    // resからIdTokenを取得し、cookieとストアにセット
    const token = await res.user.getIdToken()
    this.$cookies.set('jwt_token', token)
    commit('mutateToken', token)
      // リダイレクト
    this.app.router.push('/')
  },

  // 非同期でLoginを実装payloadはもちろんuser
  async login({commit, payload}) {
    const res = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    const token = await res.user.getIdToken()
    this.$cookies.set('jwt_token', token)
    this.app.router.push('/')
  },

  // mutationにnullをセットすることでログアウト
  // クッキーも削除
  async logout({commit}) {
    await firebase.auth().signOut()
    commit('mutateToken', null)
    this.$cookies.remove('jwt_token')
    this.app.router.push('/')
  },

  // ページ読み込み時にクッキーからストアにトークンを設定する
  // mutationを呼び出す
  // payloadはtokenが入っている
  async setToken({commit}, payload) {
    commit('mutateToken', payload)
  },
}

export const mutations = {
  mutateToken(state, payload) {
    state.token = payload
  }
}

export const getters = {
  // ログイン判定用のメソッド
  isLoggedIn(state) {
    return !!state.token
  }
}