<template>
  <div class="main-auth-wrapper">
    <div class="auth-form-modal">
      <h3 class="auth-title text-capitalize text-center mb-5">sign up</h3>
      <div class="row">
        <!-- Start Form  -->
        <div class="col-md-6">
          <ValidationObserver ref="form">
            <form class="main-form-wrapper" @submit.prevent="submitForm">
              <!-- Full Name -->
              <ValidationProvider rules="required" v-slot="{ errors }">
                <BaseAppInput
                  :isLabel="false"
                  type="text"
                  placeholder="Full Name"
                  v-model="userInfo.name"
                ></BaseAppInput>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <!-- Email  -->
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <BaseAppInput
                  :isLabel="false"
                  type="email"
                  placeholder="Email"
                  v-model="userInfo.email"
                ></BaseAppInput>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <!-- Password  -->
              <ValidationProvider
                rules="required|min:8|confirmed:confirm_password"
                vid="confirm_password"
                v-slot="{ errors }"
              >
                <BaseAppInput
                  :isLabel="false"
                  :isPassword="true"
                  :type="passwordType"
                  placeholder="Password"
                  @show-password="showPassword"
                  v-model="userInfo.password"
                ></BaseAppInput>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <!-- Confirm Password  -->
              <ValidationProvider
                rules="required|confirmed:confirm_password"
                v-slot="{ errors }"
              >
                <BaseAppInput
                  :isLabel="false"
                  :isPassword="true"
                  :type="passwordType"
                  placeholder="Confirm Password"
                  @show-password="showPassword"
                  v-model="userInfo.c_password"
                ></BaseAppInput>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <ValidationProvider rules="required" v-slot="{ errors }">
                <BaseAppSelectBox
                  :isLabel="false"
                  v-model="userInfo.gender"
                  placeholder="Choose Your Gender"
                  :options="get_genders"
                ></BaseAppSelectBox>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <button>save</button>
            </form>
          </ValidationObserver>
        </div>
        <!-- Start Photo  -->
        <div class="photo-wrapper col-md-6">
          <img
            class="w-100"
            src="@/assets/images/register/signup.png"
            alt="signup-photo"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="~/pages/auth/register/-script"></script>

<style lang="scss" scoped>
@import './-style.scss';
</style>
