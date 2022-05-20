<template>
  <v-card flat>
    <SharedHeader
      :bgImg="headerBGImage"
      :subtitle="subtitle"
      :title="title"
      :text="text"
      btn1Icon="calendar-month-outline"
      :btnText1="$t('bookPlayground')"
      :btnText2="$t('createTournament')"
    >
      <template #subtitle>
        <v-card-subtitle
          :class="{ 'display-2': !$vuetify.breakpoint.smAndDown }"
          class="font-weight-bold white--text text-uppercase"
          style="margin-bottom: -40px"
        >
          {{ $t(subtitle) }}
        </v-card-subtitle>
      </template>
      <template #title>
        <v-card-title
          :class="{ 'display-4': !$vuetify.breakpoint.smAndDown }"
          class="font-weight-bold white--text text-uppercase"
        >
          {{ $t(title) }}
        </v-card-title>
      </template>
    </SharedHeader>

    <SharedHeadline :text="$t('sports')" />

    <v-container>
      <SharedSlider :options="options">
        <slide v-for="(n, $index) in 20" :key="$index">
          <SharedCard
            :hasBadge="true"
            titleStyle="mainColor py-0 px-4 subtitle-1"
          />
        </slide>
      </SharedSlider>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
    return {
      headerBGImage: require('@/assets/images/homeHeader.png'),
      subtitle: 'welcometo',
      title: 'sportsclub',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus asperiores omnis soluta aliquam ad deleniti velit saepe qui, consectetur, fugit expedita magni eum quos labore vero officia officiis delectus magnam?',
      options: {
        //* follow along with this link https://ssense.github.io/vue-carousel/api/
        perPageCustom: [
          //* how many items will appear in each page
          [0, 1],
          [480, 2.5],
          [769, 3],
          [1023, 3],
          [1025, 3.5],
          [1350, 4],
          [1928, 6],
        ],
        autoplay: false,
        autoplayTimeout: 2000, //* how much delay it will take to slide
        scrollPerPage: true, //* slide per page or per item
        autoplayHoverPause: true,
        minSwipeDistance: 8, //* 8px
        navigationEnabled: true,
        paginationEnabled: !this.$vuetify.breakpoint.smAndDown ? true : false,
        paginationActiveColor: this.$vuetify.theme.themes.dark.mainColor,
      },
    }
  },
}
</script>
