import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import {
  required,
  alpha,
  image,
  min,
  max,
  min_value,
  max_value,
  numeric,
  email,
  confirmed,
  alpha_dash,
  ext,
  url,
  // date_format,
} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required',
})

extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters',
})
extend('image', {
  ...image,
  message: 'Please pick a photo',
})
extend('min', {
  ...min,
  message: 'This field must be at least 8 characters',
})
extend('max', {
  ...max,
  message: 'This field must be maximum 15 characters',
})
extend('min_value', {
  ...min_value,
  message: 'This field must have a valid value',
})
extend('max_value', {
  ...max_value,
  message: 'Please pick a photo',
})
extend('numeric', {
  ...numeric,
  message: 'This field must be numbers',
})
extend('email', {
  ...email,
  message: 'Write a valid email',
})
extend('confirmed', {
  ...confirmed,
  message: 'You must write the same password',
})
extend('alpha_dash', {
  ...alpha_dash,
  message: 'You can write dashed between numbers like 16-8-1994',
})
extend('ext', {
  ...ext,
  message: 'This field must a valid file like png, jpg, png',
})
// extend('date_format', {
//   ...date_format,
//   message: 'date_format',
// })
extend('url', {
  validate: (str) => {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
    return !!pattern.test(str)
  },
  message: 'This field must a valid URL',
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
