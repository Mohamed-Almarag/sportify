import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
// import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { required, alpha, image, email } from 'vee-validate/dist/rules'
// import { required } from 'vee-validate/dist/rules'

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
extend('email', {
  ...email,
  message: 'Write a valid email',
})
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
