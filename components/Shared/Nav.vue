<template>
  <nav>
    <v-app-bar dark dense flat class="px-sm-16 transparent">
      <v-app-bar-nav-icon
        v-if="isSmall"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-card flat width="20%" class="transparent">
        <v-toolbar-title>
          <nuxt-link
            exact
            to="/"
            class="white--text text-decoration-none logo-link font-weight-bold"
          >
            <v-img
              :src="require('@/assets/images/Logo.svg')"
              max-width="50%"
              max-height="100%"
            ></v-img>
          </nuxt-link>
        </v-toolbar-title>
      </v-card>

      <v-card
        width="60%"
        flat
        class="links d-flex justify-center transparent"
        style="gap: 25px"
        v-if="!isSmall"
      >
        <nuxt-link
          v-for="(link, $index) in links"
          :key="$index"
          :to="`/${link.name}`"
          class="white--text text-uppercase text-decoration-none"
        >
          {{ link.name }}
        </nuxt-link>
      </v-card>

      <!-- the left side -->
      <v-card
        flat
        width="20%"
        class="d-flex justify-end align-center transparent"
        style="gap: 10px"
      >
        <nuxt-link
          v-if="!$loggedIn()"
          to="/auth/login"
          class="white--text text-decoration-none text-uppercase"
        >
          {{ $t('auth.login') }}
        </nuxt-link>
        <nuxt-link
          v-if="!$loggedIn()"
          to="/auth/register"
          class="white--text text-decoration-none text-uppercase"
        >
          {{ $t('auth.register') }}
        </nuxt-link>
        <v-btn plain color="color" dark v-else>welcome their!</v-btn>
        <v-menu
          bottom
          nudge-bottom="4"
          transition="slide-y-transition"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              plain
              :ripple="false"
              color="white"
              icon
            >
              <v-icon> mdi-translate </v-icon>
            </v-btn>
          </template>

          <v-list dense>
            <v-list-item
              link
              @click="languageSwitcher('en')"
              class="text-center"
            >
              <v-list-item-title class="px-2">En</v-list-item-title>
            </v-list-item>
            <v-list-item
              link
              @click="languageSwitcher('ar')"
              class="text-center"
            >
              <v-list-item-title class="px-2">ع</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card>
    </v-app-bar>

    <!-- the drawer -->
    <v-navigation-drawer v-model="drawer" temporary app hide-overlay>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="amber--text text--accent-4"
        >
          <v-list-item v-for="(link, $index) in links" :key="$index">
            <nuxt-link
              :to="`/${link.name}`"
              class="w-full text-capitalize text-decoration-none color--text"
            >
              <v-list-item-title>
                {{ link.name }}
              </v-list-item-title>
            </nuxt-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isAuth: false,
      drawer: false,
      group: null,
      currentLang: !process.server ? localStorage.getItem('lang') : 'en',
      links: [{ name: 'playgrounds' }, { name: 'contact' }, { name: 'about' }],
    }
  },
  computed: {
    isSmall() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
    currentLang(newV, oldV) {
      console.log({ newV, oldV })
    },
  },
  mounted() {
    if (!this.currentLang) {
      this.$i18n.locale == 'ar'
    } else if (this.currentLang == 'ar') {
      this.$i18n.locale = 'ar'
      this.$vuetify.rtl = true
    } else {
      this.$i18n.locale = 'en'
      this.$vuetify.rtl = false
    }
  },
  methods: {
    languageSwitcher(local) {
      this.$i18n.locale = local
      console.log(this.$i18n.locale)
      localStorage.setItem('lang', local)
      if (local == 'ar') {
        this.$vuetify.rtl = true
      } else {
        this.$vuetify.rtl = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;

  .logo-link:focus {
    outline: none;
  }
}
</style>
