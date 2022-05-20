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
  },
}
</script>

<style lang="scss">
.VueCarousel-pagination {
  position: absolute !important;
  right: 50vw !important;
  transform: translateX(-50%) !important;
  bottom: -35px;
}
.VueCarousel-dot-container {
  button {
    margin-top: 0;
  }
}
.VueCarousel-wrapper {
  padding: 25px 5px;
}
.VueCarousel-navigation {
  position: absolute;
  left: 50%;
  right: 55%;
  bottom: 0;
  transform: translate(-50%, -50%) !important;
  .VueCarousel-navigation-prev {
    left: 50% !important;
    bottom: -10px;
    transform: translateY(50%) translateX(-100%) rotate(-180deg) !important;
  }
  .VueCarousel-navigation-next {
    right: 50% !important;
    bottom: -10px;
    transform: translateY(50%) translateX(-100%) rotate(180deg) !important;
  }
}
</style>
