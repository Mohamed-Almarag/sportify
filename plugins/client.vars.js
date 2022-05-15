export default ({ app, store }, inject) => {
  // handle is logged in user or not
  const loggedIn = () => store.getters['authentication/loggedIn']
  // Response errors Handler
  const errors = () => store.state.Errors

  inject('loggedIn', loggedIn)
  inject('errors', errors)
}
