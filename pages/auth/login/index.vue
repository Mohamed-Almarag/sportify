<template>
  <v-card flat max-width="440" class="mx-auto mt-10">
    <form @submit.prevent="loginHandler">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.email"
            color="color"
            label="Email*"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="form.password"
            color="color"
            label="Password*"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-card-text v-if="$loggedIn" class="green--text">
          {{ responseMsg }}
        </v-card-text>
        <v-card-text v-if="token" class="text-truncate">
          token:
          {{ token }}
        </v-card-text>
        <v-col cols="12">
          <v-btn @click="loginHandler" :loading="loading">login</v-btn>
        </v-col>
      </v-row>
    </form>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      loading: false,
      responseMsg: '',
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.authentication.Token,
    }),
    ...mapGetters('authentication', ['loggedIn']),
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
