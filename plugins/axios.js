export default ({ $axios }) => {
  $axios.onRequest((config) => {
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${this.$cookiz.get('TOKEN') || ''}`,
    }
  })
  $axios.onError((error) => console.error(error))
}
