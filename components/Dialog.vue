<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Information</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="userInfo.name"
                  label="Full name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="userInfo.email"
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="userInfo.password"
                  label="Password*"
                  :type="showPassword ? 'password' : 'text'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="userInfo.c_password"
                  label="Confirm Password*"
                  :type="showPassword ? 'password' : 'text'"
                  @click:append="showPassword = !showPassword"
                  required
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
                        {{ gender.name }}
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
              <v-col cols="12" v-if="responseMsg">
                <v-card-text class="green--text px-0">
                  {{ responseMsg }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            @click="registerHandler"
          >
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
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
