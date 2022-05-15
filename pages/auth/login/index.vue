<template>
  <v-img :src="bgImage" min-height="100vh">
    <v-card
      style="background: rgba(0, 0, 0, 0.3)"
      tile
      height="100%"
      width="100%"
    >
      <v-card
        :max-width="$vuetify.breakpoint.width > 1290 ? '75%' : '100%'"
        class="mx-auto mt-10 pa-md-8"
        rounded
        elevation="20"
      >
        <v-card-title
          v-if="$vuetify.breakpoint.width > 480"
          class="d-flex justify-center align-center text-uppercase display-1 font-weight-medium col-md-6"
        >
          {{ $t('auth.login') }}
        </v-card-title>
        <v-card-title
          v-if="$vuetify.breakpoint.width < 480"
          class="d-flex justify-center align-center text-uppercase headline font-weight-medium col-md-6"
        >
          {{ $t('auth.login') }}
        </v-card-title>
        <v-row no-gutters justify="center" align="center">
          <v-col
            cols="12"
            md="6"
            order-md="last"
            class="pa-2 d-flex justify-center align-center"
          >
            <div>
              <v-img
                :src="img"
                class="rounded-circle"
                :width="this.$vuetify.breakpoint.width > 768 ? 350 : 260"
                :height="this.$vuetify.breakpoint.width > 768 ? 350 : 260"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6" order-md="first" class="pa-2">
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.email"
                    color="mainColor"
                    :label="$t('auth.email')"
                    type="email"
                    required
                    solo
                    rounded
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.password"
                    color="mainColor"
                    :label="$t('auth.password')"
                    :type="!showPassword ? 'password' : 'text'"
                    :append-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    required
                    solo
                    rounded
                  ></v-text-field>
                </v-col>
                <v-card-text v-if="$errors()" class="error--text">
                  {{ $errors().message }}
                </v-card-text>
                <v-col cols="12" class="d-flex justify-center align-center">
                  <v-btn
                    @click="loginHandler"
                    :loading="loading"
                    class="px-16 py-6 font-weight-bold"
                    style="font-size: large"
                    color="mainColor"
                    rounded
                    >{{ $t('auth.login') }}</v-btn
                  >
                </v-col>
                <v-col cols="12">
                  <v-card-text class="d-flex justify-center align-center">
                    {{ $t('auth.hasNoAccount') }}?
                    <nuxt-link
                      to="/auth/register"
                      class="text-uppercase mx-1 mainColor--text"
                    >
                      {{ $t('auth.register') }}
                    </nuxt-link>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </v-img>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  layout: 'auth',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      showPassword: false,
      loading: false,
      responseMsg: '',
      img: 'https://cdn.dribbble.com/users/2196582/screenshots/18230907/media/276b484feb3279dc410f841368947bc4.jpg',
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.authentication.Token,
    }),
    ...mapGetters('authentication', ['loggedIn']),
    bgImage() {
      return require('@/assets/images/register/bg.png')
    },
  },
  methods: {
    loginHandler() {
      let userInfo = this.form
      this.loading = true
      this.$store
        .dispatch('authentication/loginHandler', userInfo)
        .then((response) => {
          if (response) {
            console.log({
              response,
              loggedIn: this.$loggedIn(),
              isLoggedIn: this.loggedIn,
            })
            this.responseMsg = 'successfully loggedIn'
          }
        })
        .finally(() => (this.loading = false))
    },
  },
}
</script>

<style lang="scss" scoped></style>
