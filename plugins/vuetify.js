import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        color: '#000',
      },
      dark: {
        color: '#fff',
      },
    },
  },
}

export default new Vuetify(opts)
