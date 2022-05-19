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
        <v-card-title
          class="display-2 font-weight-bold white--text text-uppercase"
          style="margin-bottom: -40px"
        >
          {{ $t(subtitle) }}
        </v-card-title>
      </template>
      <template #title>
        <v-card-title
          class="display-4 font-weight-bold white--text text-uppercase"
        >
          {{ $t(title) }}
        </v-card-title>
      </template>
    </SharedHeader>

    <SharedSlider
      :options="options"
      :bottom="$vuetify.breakpoint.width > 768 ? '-25' : '-60'"
    >
      <slide v-for="(n, $index) in 20" :key="$index">
        <SharedCard />
      </slide>
    </SharedSlider>
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
          [390, 1.5],
          [480, 2.9],
          [769, 3.1],
          [1023, 3.9],
          [1025, 4.5],
          [1350, 5.5],
          [1928, 7.5],
        ],
        autoplay: false,
        autoplayTimeout: 2000, //* how much delay it will take to slide
        scrollPerPage: true, //* slide per page or per item
        autoplayHoverPause: true,
        minSwipeDistance: 8, //* 8px
        paginationEnabled: true,
      },
    }
  },
}
</script>
