<template>
  <v-card-title
    :class="$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1'"
    class="d-flex justify-center text-uppercase"
  >
    {{ text }}
  </v-card-title>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
