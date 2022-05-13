<template>
  <div class="slectbox-wrapper">
    <label class="control-label" v-if="isLabel">{{ label }}</label>
    <multiselect
      v-model="selected"
      :options="options"
      :multiple="isMultiselect"
      :placeholder="placeholder"
      track-by="name"
      label="name"
    >
      <template slot="singleLabel" slot-scope="{ option }">
        {{ option.name }}
      </template>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'AppSelectBox',
  props: {
    label: {
      type: String,
    },
    isLabel: {
      type: Boolean,
      default: true,
    },
    value: {
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
    },
    isMultiselect: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Multiselect,
  },
  data() {
    return {
      selected: '',
    }
  },
  watch: {
    selected(currentValue) {
      if (currentValue) {
        this.$emit('input', currentValue.value)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.slectbox-wrapper {
  position: relative;

  .control-label {
    color: #565656;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
<style lang="scss">
.slectbox-wrapper {
  // box-shadow: $shadow;
  // border-radius: 25px;
  &.bg_white {
    .multiselect__tags {
      background-color: #fff;
    }
  }
  &.bg_gray {
    .multiselect__tags {
      background-color: #f4f6f8;
    }
  }
  .multiselect {
    min-height: 50px;
  }
  .multiselect__single {
    font-size: 14px;
    color: #495057;
    background-color: transparent;
  }
  // Main style
  .multiselect__tags {
    border: 1px solid transparent;
    border-radius: 25px;
    box-shadow: $shadow;
    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 8px 40px 0 1rem;
  }
  .multiselect__select {
    top: 8px;
  }
  .multiselect__tag {
    span {
      font-size: 13px;
      font-weight: 600;
    }
  }
  .multiselect__option {
    font-size: 14px;
  }
  .multiselect__input {
    font-size: 12px;
    color: #ddd;
    background-color: transparent;
  }
  .multiselect__placeholder {
    font-weight: 400;
    padding-bottom: 0;
    font-size: 14px;
    color: $text-color;
  }
  &.bg_gray {
    .multiselect__tags {
      border: none;
      background-color: #f4f6f8;
      min-height: 54px;
      padding-left: 12px;
      font-size: 14px;
      color: #000;
      font-weight: 500;
    }
    .multiselect__select:before {
      top: 28px;
    }
    .multiselect__single {
      background-color: transparent;
    }
    .multiselect__placeholder {
      font-weight: 400;
      padding-bottom: 0;
      font-size: 14px;
      color: $text-color;
    }
  }
  .multiselect__element {
    .multiselect__option::after {
      display: none;
    }
  }
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
