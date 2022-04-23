<template>
  <div>
    <ValidationObserver ref="form">
      <form action="" @submit.prevent="submitForm">
        <ValidationProvider rules="required|email" v-slot="{ errors }">
          <input type="email" name="" id="" />
          <span v-if="errors[0]" class="validation-error">{{ errors[0] }}</span>
        </ValidationProvider>
        <button>save</button>
      </form>
    </ValidationObserver>
    <h1>register</h1>
  </div>
</template>

<script>
export default {
  name: 'Register',
  layout: 'auth-layout',
  methods: {
    submitForm() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        } else {
          console.log('yes submit')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
