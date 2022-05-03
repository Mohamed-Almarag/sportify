<template>
  <div class="form-group">
    <div class="input-group">
      <textarea
        v-if="isTextarea"
        class="form-control"
        rows="5"
        :placeholder="placeholder"
        v-model="model"
      ></textarea>
      <input
        v-else
        :type="type"
        class="form-control"
        :placeholder="placeholder"
        v-model="model"
        :inputvalue="model"
        :id="placeholder"
        :disabled="disabled"
      />
      <label :for="placeholder" class="control-label">{{ label }}</label>
      <span class="show_icon" @click="showPassword" v-if="isPassword">
        <!-- <svg class="icon">
          <use xlink:href="~/static/svg/sprite.svg#eye"></use>
        </svg> -->
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingInput',
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    inputvalue: {
      type: String,
      default: '',
    },
    isPassword: {
      type: Boolean,
      default: false,
    },
    isTextarea: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      model: this.inputvalue,
    }
  },
  watch: {
    model(currentValue) {
      this.$emit('input', currentValue)
    },
  },
  methods: {
    showPassword() {
      this.$emit('show-password')
    },
  },
}
</script>

<style lang="scss" scoped>
.form-group {
  position: relative;
  border-radius: 10px;
  &.w_50 {
    width: calc(50% - 10px);
  }
  .control-label {
    color: #a1a6b2;
    font-size: 13px;
    font-weight: 400;
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    margin-bottom: 0;
    z-index: 10;
    transition: all 0.25s;
    cursor: pointer;
  }
  .form-control {
    font-size: 14px;
    height: 54px;
    padding-bottom: 0;
    font-weight: 500;
    border-radius: 10px !important;
    background-color: #f4f6f8;
    border: 1px solid transparent;
    &::placeholder {
      font-size: 14px;
      opacity: 0;
    }
    &:focus {
      border: 1px solid #f6b027;
    }
    &:focus + .control-label {
      color: #f6b027;
      top: 14px;
    }
    &:not(:placeholder-shown) + .control-label {
      top: 14px;
    }
    &:disabled {
      opacity: 0.75;
    }
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  textarea.form-control {
    height: auto;
    resize: none;
  }
  .show_icon {
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
    .icon {
      width: 22px;
      height: 20px;
      fill: #8f8f8f;
    }
  }
}
</style>
