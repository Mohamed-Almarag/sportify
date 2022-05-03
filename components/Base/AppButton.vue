<template>
  <button class="btn" v-if="!isLink" @click="emitClick" :type="type">
    <slot></slot>
  </button>
  <NuxtLink :to="toRoute" class="btn" v-else>
    <slot name="link"></slot>
  </NuxtLink>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['emit-click'],
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },
    toRoute: {
      type: Object,
    },
    type: {
      type: String,
      default: 'btn',
    },
  },
  methods: {
    emitClick() {
      this.$emit('emit-click')
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px 25px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  border: 1px solid #ffc107;
  box-shadow: none;
  min-width: 120px;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  }
  &:active {
    background-color: #f0b506;
  }
}
.solid {
  background-color: #ffc107;
  color: #fff;
}
.outline {
  background-color: transparent;
  color: #ffc107;
  &:hover {
    background-color: #ffc107;
    color: #fff;
  }
}
.cancel {
  background-color: #b4b4b4;
  border-color: #b4b4b4;
  color: #fff;
  &:focus {
    box-shadow: none;
  }
}
</style>
