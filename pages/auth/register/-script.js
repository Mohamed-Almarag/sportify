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
  },
  methods: {
    showPassword() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    submitForm() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        } else {
          this.handleRequest()
        }
      })
    },
    handleRequest(){
      console.log('yes submit')
    }
  },
  mounted() {
    this.$store.dispatch('get_all_emirats')
  },
}
