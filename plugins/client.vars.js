export default ({ app, store }, inject) => {
  let loggedIn = () => store.getters['authentication/loggedIn']

  inject('loggedIn', loggedIn)
}
