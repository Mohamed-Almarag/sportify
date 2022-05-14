export default ({ app, $axios }) => {
  $axios.onRequest((config) => {
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${app.$cookiz.get('TOKEN') || ''}`,
    }
  })
  $axios.onError((error) => console.error(error))
}
