import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        color: '#1A0A52',
        mainColor: '#64C4A4',
      },
      dark: {
        color: '#fff',
        mainColor: '#64C4A4',
      },
    },
  },
}

export default new Vuetify(opts)
