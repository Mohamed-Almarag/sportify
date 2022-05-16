<template>
  <carousel v-bind="options">
    <slot></slot>
  </carousel>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    bottom: {
      type: Number | String,
      required: false,
    },
  },
  mounted() {
    const vueCarousel = document.querySelector('.VueCarousel-pagination')
    vueCarousel.style.bottom = `${this.bottom}px`
  },
}
</script>

<style lang="scss">
.VueCarousel-pagination {
  position: absolute !important;
  bottom: -35px;
}
.VueCarousel-dot-container {
  button {
    margin-top: 0;
  }
}
.VueCarousel-wrapper {
  padding: 10px 5px;
}
</style>
