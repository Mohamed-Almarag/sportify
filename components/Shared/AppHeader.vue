<template>
  <nav>
    <v-app-bar elevate-on-scroll dense>
      <v-app-bar-nav-icon
        v-if="isSmall"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <nuxt-link
          to="/"
          class="color--text text-decoration-none logo-link font-weight-bold"
        >
          Sportify
        </nuxt-link>
      </v-toolbar-title>
      <div class="links" v-if="!isSmall">
        <v-btn
          v-for="(link, $index) in links"
          :key="$index"
          :to="`/${link.name}`"
          plain
          class="color--text"
          :ripple="false"
        >
          {{ link.name }}
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <!-- the left side -->
      <div>
        <v-btn @click="appModeHandler" plain :ripple="false" color="color" icon>
          <v-icon>mdi-lightbulb</v-icon>
        </v-btn>
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
              color="color"
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
      </div>
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
    availableLocales() {
      return this.$i18n.locales
      // return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
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
    appModeHandler() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;

  .logo-link:focus {
    outline: none;
  }
}
</style>
