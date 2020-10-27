export default ({app, store}) => {
  // jwt_tokenのを取得
  const token = app.$cookies.get('jwt_token')
  if (token) {
    // setTokenアクションを呼び出す
    store.dispatch('setToken', token)
  }
}