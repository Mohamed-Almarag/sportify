<template>
  <v-img :src="bgImage" min-height="100vh">
    <v-card
      flat
      raised
      tile
      style="background: rgba(0, 0, 0, 0.3)"
      height="100%"
      width="100%"
      class="my-3"
    >
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
                      v-model="userInfo.name"
                      :label="$t('auth.name')"
                      type="text"
                      required
                      color="mainColor"
                      solo
                      rounded
                      :error-messages="
                        $errors() && $errors().data.name
                          ? $errors() && $errors().data.name[0]
                          : ''
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="userInfo.email"
                      :label="$t('auth.email')"
                      type="email"
                      required
                      color="mainColor"
                      solo
                      rounded
                      :error-messages="
                        $errors() && $errors().data.email
                          ? $errors() && $errors().data.email[0]
                          : ''
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="userInfo.password"
                      :label="$t('auth.password')"
                      :type="!showPassword ? 'password' : 'text'"
                      :append-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                      required
                      color="mainColor"
                      solo
                      rounded
                      :error-messages="
                        $errors() && $errors().data.password
                          ? $errors() && $errors().data.password[0]
                          : ''
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="userInfo.c_password"
                      :label="$t('auth.c_password')"
                      :type="!showPassword ? 'password' : 'text'"
                      @click:append="showPassword = !showPassword"
                      required
                      color="mainColor"
                      solo
                      rounded
                      :error-messages="
                        $errors() && $errors().data.c_password
                          ? $errors() && $errors().data.c_password[0]
                          : ''
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-menu rounded="lg">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          rounded
                          block
                          color="white"
                          class="d-flex justify-space-between color--text py-6"
                          v-bind="attrs"
                          v-on="on"
                        >
                          {{
                            userInfo.gender === '' ? 'Gender' : userInfo.gender
                          }}
                          <v-icon style="transform: rotate(90deg)" small
                            >mdi-arrow-split-vertical</v-icon
                          >
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(gender, $index) in genders"
                          :key="$index"
                          class="pa-0"
                        >
                          <v-btn
                            @click="selectedGenderF(gender)"
                            depressed
                            block
                            tile
                            text
                          >
                            {{ $t(`auth.genderTitles.${gender.name}`) }}
                          </v-btn>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <small
                      v-if="$errors() && $errors().data.gender"
                      class="error--text d-block ma-3"
                    >
                      {{ $errors() && $errors().data.gender[0] }}
                    </small>
                  </v-col>
                  <v-card-text v-if="$errors()" class="error--text">
                    {{ $errors().message }}
                  </v-card-text>
                  <v-col cols="12" class="d-flex justify-center align-center">
                    <v-btn
                      @click="registerHandler"
                      :loading="loading"
                      class="px-16 py-6 font-weight-bold"
                      style="font-size: large"
                      color="mainColor"
                      rounded
                      >{{ $t('auth.register') }}</v-btn
                    >
                  </v-col>
                  <v-col cols="12">
                    <v-card-text class="d-flex justify-center align-center">
                      {{ $t('auth.hasAccount') }}?
                      <nuxt-link
                        to="/auth/login"
                        class="text-uppercase mx-1 mainColor--text"
                      >
                        {{ $t('auth.login') }}
                      </nuxt-link>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-card>
  </v-img>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Register',
  layout: 'auth',
  data() {
    return {
      showPassword: false,
      loading: false,
      responseMsg: '',
      img: 'https://cdn.dribbble.com/users/4505996/screenshots/18245282/media/4652e74e2098686e905ba955d10850d1.jpg',
      userInfo: {
        name: '',
        email: '',
        password: '',
        c_password: '',
        gender: '',
        emirate_id: '3',
      },
    }
  },
  computed: {
    ...mapState({
      genders: (state) => state.genders,
    }),
    bgImage() {
      return require('@/assets/images/register/bg.png')
    },
  },
  methods: {
    inputTypeHandler() {
      this.inputType === 'password' ? 'text' : 'password'
    },
    selectedGenderF(gender) {
      this.userInfo.gender = gender.value
    },
    async registerHandler() {
      this.loading = true
      let userInfo = this.userInfo
      await this.$store
        .dispatch('authentication/registerHandler', userInfo)
        .then((response) => {
          if (response?.success) {
            this.responseMsg = `Welcome, now you're one of us!`
          }
        })
        .finally(() => (this.loading = false))
    },
  },
  mounted() {
    this.$store.dispatch('get_all_emirats')
  },
}
</script>
