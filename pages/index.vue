<template>
  <div class="mt-16">
    <SharedSlider
      :options="options"
      :bottom="$vuetify.breakpoint.width > 768 ? '-25' : '-60'"
    >
      <slide v-for="(n, $index) in 20" :key="$index">
        <SharedCard />
      </slide>
    </SharedSlider>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
    return {
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
