<template>
  <v-card flat>
    <SharedHeader :bgImg="headerBGImage" :text="text">
      <template #subtitle>
        <v-card-title
          class="display-4 font-weight-bold white--text text-uppercase"
          style="margin-bottom: -40px"
        >
          {{ $t(title) }}
        </v-card-title>
      </template>
      <template #title>
        <v-card-title
          class="display-4 font-weight-bold white--text text-uppercase"
        >
          <v-img :src="require('@/assets/images/Logo.svg')"></v-img>
        </v-card-title>
      </template>
    </SharedHeader>
  </v-card>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      headerBGImage: require('@/assets/images/aboutusHeader.png'),
      title: 'aboutUs',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus asperiores omnis soluta aliquam ad deleniti velit saepe qui, consectetur, fugit expedita magni eum quos labore vero officia officiis delectus magnam?',
    }
  },
}
</script>

<style lang="scss" scoped></style>
