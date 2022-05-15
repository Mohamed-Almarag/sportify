<template>
  <v-img :src="bgImage" height="100vh">
    <v-card
      flat
      raised
      tile
      style="background: rgba(0, 0, 0, 0.3)"
      height="100%"
      dark
    >
      <v-card-title
        class="display-2 font-weight-light flex justify-center"
        style="background: rgba(225, 225, 225, 0.5); backdrop-filter: blur(5px)"
      >
        Register
      </v-card-title>

      <div class="mt-16">
        <Dialog />
      </div>
    </v-card>
  </v-img>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Register',
  layout: 'auth-layout',
  data() {
    return {
      passwordType: 'password',
      userInfo: {
        name: '',
        email: '',
        password: '',
        c_password: '',
        gender: '',
        emirate_id: '',
      },
      genders: [
        { name: 'Male', value: 'Male' },
        { name: 'Female', value: 'Female' },
        { name: 'Other', value: 'Other' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      get_genders: ['get_genders'],
    }),
    bgImage() {
      return require('@/assets//images/register/bg.png')
    },
  },
  methods: {
    showPassword() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    submitForm() {
      console.log('hello their')
    },
    handleRequest() {
      console.log('yes submit')
    },
  },
  mounted() {
    this.$store.dispatch('get_all_emirats')
  },
}
</script>
