<template>
  <v-app class="scroller">
    <SharedNav></SharedNav>
    <v-main>
      <Nuxt />
    </v-main>
    <SharedAppFooter></SharedAppFooter>
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss">
html,
body {
  .scroller {
    scrollbar-color: rgb(161, 161, 161) transparent;
    scrollbar-width: thin;
  }
  .scroller::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent;
    border-radius: 4px;
  }
  .scroller::-webkit-scrollbar-thumb {
    background: rgb(161, 161, 161);
    border-radius: 5px;
  }
}
</style>
