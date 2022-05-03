<template>
  <header>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item href="#">
              <nuxt-link to="/">Home</nuxt-link>
            </b-nav-item>
            <b-nav-item href="#">
              <nuxt-link to="/about">About Us</nuxt-link>
            </b-nav-item>
            <b-nav-item href="#">
              <nuxt-link to="/playgrounds">Playgrounds</nuxt-link>
            </b-nav-item>
            <b-nav-item href="#">
              <nuxt-link to="/contact">Contact Us</nuxt-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Start User Authentication  -->
          <!-- <b-navbar-nav class="ml-auto">

          </b-navbar-nav> -->
          <!-- End User Authentication  -->
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto align-items-center">
            <b-nav-item-dropdown text="Lang" right>
              <!-- <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                @click.native="switchs(locale.code)"
                >{{ locale.code }}</nuxt-link
              > -->
              <b-dropdown-item
                href="#"
                v-for="locale in availableLocales"
                :key="locale.code"
                @click="switchs(locale.code)"
                :to="switchLocalePath(locale.code)"
                >{{ locale.code }}</b-dropdown-item
              >
              <!-- <b-dropdown-item href="#">ES</b-dropdown-item> -->
            </b-nav-item-dropdown>
            <nuxt-link to="auth/register">Sign Up</nuxt-link>
            <b-nav-item-dropdown right v-if="isAuth">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isAuth: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
      // return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  mounted() {
    console.log(this.availableLocales)
    console.log(this.$i18n.locale)
    this.$cookiz.get('lang')
    // setCookie
    if (this.$cookiz.get('lang') == 'ar') {
      this.$i18n.locale = 'ar'
      // this.$vuetify.rtl = true
      // this.$auth.$storage.setCookie('lang', 'ar', false)
    } else {
      this.$i18n.locale = 'en'
      // this.$vuetify.rtl = false
      // this.$auth.$storage.setCookie('lang', 'en', false)
    }
  },
  methods: {
    switchs(local) {
      this.$i18n.locale = local
      this.$cookiz.set('lang', local)
      console.log(this.$i18n.locale)
      // localStorage.setItem('lang', local)
      // if (local == 'ar') {
      //   this.$vuetify.rtl = true
      // } else {
      //   this.$vuetify.rtl = false
      // }
    },
    // switchs() {
    //   let llang = this.$i18n.locale

    //   if (llang == 'ar') {
    //     this.$i18n.locale = 'en'
    //   } else {
    //     this.$i18n.locale = 'ar'
    //   }
    //   console.log(this.$i18n.locale)
    // },
  },
}
</script>

<style lang="scss" scoped></style>
