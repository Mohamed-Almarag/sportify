<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-form @submit.prevent="registerHandler" class="white">
        <v-card-title class="pt-8 text-uppercase">
          <span class="text-h5">User Information</span>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="userInfo.name"
                :label="$t('auth.name')"
                type="text"
                required
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
                :error-messages="
                  $errors() && $errors().data.c_password
                    ? $errors() && $errors().data.c_password[0]
                    : ''
                "
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-menu rounded="lg">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn depressed class="px-10" v-bind="attrs" v-on="on">
                    {{ userInfo.gender === '' ? 'Gender' : userInfo.gender }}
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
                      plain
                    >
                      {{ $t(`auth.genderTitles.${gender.name}`) }}
                    </v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
              <span
                v-if="$errors() && $errors().data.gender"
                class="error--text d-block"
              >
                {{ $errors() && $errors().data.gender[0] }}
              </span>
            </v-col>
            <v-col cols="12" v-if="responseMsg">
              <v-card-text class="green--text px-0">
                {{ responseMsg }}
              </v-card-text>
            </v-col>
            <v-col cols="12" v-else-if="$errors()">
              <v-card-text class="error--text px-0">
                {{ $errors().message }}
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            {{ $t('close') }}
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            @click="registerHandler"
            type="submit"
          >
            {{ $t('auth.register') }}
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    showPassword: false,
    loading: false,
    responseMsg: '',
    userInfo: {
      name: '',
      email: '',
      password: '',
      c_password: '',
      gender: '',
      emirate_id: '3',
    },
  }),
  computed: {
    ...mapState({
      genders: (state) => state.genders,
    }),
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
}
</script>
