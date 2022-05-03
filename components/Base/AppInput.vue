<template>
  <div class="form-group">
    <label class="control-label" v-if="isLabel">{{ label }}</label>
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
        :disabled="disabled"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    label: {
      type: String,
    },
    isLabel: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    inputvalue: {
      type: [String, Number],
      default: '',
    },
    isTextarea: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
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
}
</script>

<style lang="scss" scoped>
.form-group {
  position: relative;
  &.row_display {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input-group,
    input {
      width: calc(70%);
    }
  }
  &.msg-container {
    .input-group,
    input {
      min-height: 400px;
      border: 1px solid #ced4da;
      border-radius: 15px;
    }
  }
  &.sm-input {
    margin-bottom: 0;
    .form-control {
      width: 120px;
      height: 40px;
      border: 1px solid #eee;
      text-align: center;
      &::placeholder {
        color: #808080;
      }
    }
  }
  &.bg_white {
    .form-control {
      background-color: #fff;
    }
  }
  &.bg_gray {
    .form-control {
      background-color: #f4f6f8;
    }
  }
  .control-label {
    color: #565656;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .form-control {
    font-size: 15px;
    height: 54px;
    border-radius: 10px;
    border: 1px solid transparent;
    &::placeholder {
      font-size: 14px;
    }
    &:focus {
      border-color: #f6b027;
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
}
.w_50 {
  width: calc(50% - 10px);
}
</style>
