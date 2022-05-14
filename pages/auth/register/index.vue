<template>
  <div class="main-auth-wrapper">
    <div class="auth-form-modal">
      <h3 class="auth-title text-capitalize text-center mb-5">sign up</h3>
      <div class="row">
        <!-- Start Form  -->
        <div class="col-md-6">
          <!-- <ValidationObserver ref="form">
            <form class="main-form-wrapper" @submit.prevent="submitForm">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <BaseAppInput
                  :isLabel="false"
                  type="text"
                  placeholder="Full Name"
                  v-model="userInfo.name"
                ></BaseAppInput>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <BaseAppInput
                  :isLabel="false"
                  type="email"
                  placeholder="Email"
                  v-model="userInfo.email"
                ></BaseAppInput>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <ValidationProvider
                rules="required|min:8|confirmed:confirm_password"
                vid="confirm_password"
                v-slot="{ errors }"
              >
                <BaseAppInput
                  :isLabel="false"
                  :isPassword="true"
                  :type="passwordType"
                  placeholder="Password"
                  @show-password="showPassword"
                  v-model="userInfo.password"
                ></BaseAppInput>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <ValidationProvider
                rules="required|confirmed:confirm_password"
                v-slot="{ errors }"
              >
                <BaseAppInput
                  :isLabel="false"
                  :isPassword="true"
                  :type="passwordType"
                  placeholder="Confirm Password"
                  @show-password="showPassword"
                  v-model="userInfo.c_password"
                ></BaseAppInput>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <ValidationProvider rules="required" v-slot="{ errors }">
                <BaseAppSelectBox
                  :isLabel="false"
                  v-model="userInfo.gender"
                  placeholder="Choose Your Gender"
                  :options="get_genders"
                ></BaseAppSelectBox>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <button>save</button>
            </form>
          </ValidationObserver> -->
        </div>
        <div class="photo-wrapper col-md-6">
          <img
            class="w-100"
            src="@/assets/images/register/signup.png"
            alt="signup-photo"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </div>
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
  },
  methods: {
    showPassword() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    submitForm() {
      // this.$refs.form.validate().then((success) => {
      //   if (!success) {
      //     return
      //   } else {
      //     this.handleRequest()
      //   }
      // })
      console.log('hello there')
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

<style lang="scss" scoped>
.main-auth-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .auth-form-modal {
    background-color: $white;
    width: 100%;
    max-width: 800px;
    margin: auto;
    padding: 2rem;
  }
}
</style>
