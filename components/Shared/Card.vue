<template>
  <v-card
    class="mx-auto d-flex justify-center align-center flex-column overflow-hidden"
    max-width="264"
    elevation="3"
    rounded="xl"
  >
    <v-img
      src="https://cdn.dribbble.com/users/719060/screenshots/16922617/media/085ed68ead067a3e2c4509a5445a8db4.jpg?compress=1&resize=1200x900&vertical=top"
      height="150px"
      class="rounded-lg"
    ></v-img>

    <div v-if="hasBadge" style="width: 30px" class="mt-4 mb-2">
      <v-img :src="require('@/assets/images/games/Basketball.svg')"></v-img>
    </div>

    <v-card-title :class="titleStyle" class="text-truncate rounded-pill">
      Football
    </v-card-title>

    <v-card-text class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit cing elit.
    </v-card-text>

    <v-card-actions class="d-flex justify-center" v-if="hasDate">
      <v-chip color="mainColor lighten-2" small> 12-8-2022 </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    hasDate: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasBadge: {
      type: Boolean,
      required: false,
      default: false,
    },
    titleStyle: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
