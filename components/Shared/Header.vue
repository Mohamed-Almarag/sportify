<template>
  <v-img :src="bgImg" class="rounded-0" height="100vh">
    <v-card
      flat
      tile
      height="100%"
      class="d-flex justify-center align-center flex-column"
      style="background: rgba(0, 0, 0, 0.4)"
    >
      <slot name="subtitle"></slot>
      <slot name="title"></slot>
      <v-card-subtitle
        v-text="text"
        class="white--text container text-center px-sm-16"
      ></v-card-subtitle>
      <v-card
        flat
        class="transparent d-flex justify-center flex-wrap"
        style="gap: 20px"
      >
        <v-btn v-if="btnText2" color="mainColor" rounded depressed>
          <v-icon v-if="btn1Icon" :left="!$vuetify.rtl" :right="$vuetify.rtl">
            mdi-{{ btn1Icon }}
          </v-icon>
          {{ btnText2 }}
        </v-btn>
        <v-btn v-if="btnText1" rounded outlined color="mainColor">
          <v-icon v-if="btn2Icon"> mdi-{{ btn2Icon }} </v-icon>
          {{ btnText1 }}
        </v-btn>
      </v-card>
    </v-card>
  </v-img>
</template>

<script>
export default {
  props: {
    bgImg: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    btnText1: {
      type: String,
      required: false,
    },
    btnText2: {
      type: String,
      required: false,
    },
    btn1Icon: {
      type: String,
      required: false,
    },
    btn2Icon: {
      type: String,
      required: false,
    },
  },
}
</script>
