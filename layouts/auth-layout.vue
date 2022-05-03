<template>
  <div class="auth-layout">
    <!-- // "node-sass": "^7.0.1", -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'auth-layout',
}
</script>

<style lang="scss" scoped>
.auth-layout {
  height: 100vh;
  background-image: url('../assets//images/register/bg.png');
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
}
</style>
