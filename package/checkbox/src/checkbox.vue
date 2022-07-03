<template>
  <label
    :class="{
      ['h-checkbox']: true,
      checked: checked === value,
      disabled: disabled,
    }"
  >
    <input
      type="checkbox"
      :disabled="disabled"
      v-model="checked"
      :value="value"
      @change="_change"
    />
    <span :class="'h-checkbox-inner'"></span>
    <span :class="'h-checkbox-text'" v-if="$slots.default"><slot></slot></span>
    <span :class="'h-checkbox-text'" v-else v-text="label"></span>
  </label>
</template>
<script>
export default {
  name: "hCheckbox",
  data() {
    return {
      checked: this.modelValue,
    };
  },
  watch: {
    modelValue() {
      this.checked = this.modelValue;
    },
  },
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    label: String,
    value: {
      type: [String, Boolean, Number],
      default: true,
    },
  },
  components: {},
  methods: {
    _change(e) {
      let value = this.checked;
      if (typeof this.modelValue === "string" && this.value) {
        if (value) {
          value = e.target.value;
        } else {
          value = "";
        }
      }
      this.$emit("change", value, this.label);
    },
  },
};
</script>

<style lang="less" scoped>
.h-checkbox {
  cursor: pointer;
  input {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }
  /*默认*/
  .h-checkbox-text {
    margin-left: 5px;
  }
  .h-checkbox-inner {
    border: 1px solid #dcdfe6;
    background-color: #fff;
    position: relative;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    z-index: 1;
    transition: border-color 0.3s, background-color 0.3s;
    font-family: "iconfont";
    &:after {
      content: "\e88c";
      width: 100%;
      height: 14px;
      font-size: 12px;
      line-height: 14px;
      opacity: 0;
      transition: all 0.3s;
      display: block;
      visibility: hidden;
      transform: scale(0.5);
      font-weight: 700;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  /*选中状态*/
  input:checked + .h-checkbox-inner {
    background-color: #409eff;
    border-color: #409eff;
    &:after {
      opacity: 1;
      visibility: visible;
      color: #fff;
      transform: scale(1);
    }
  }
  /*禁用状态*/
  input:disabled + .h-checkbox-inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
    &:after {
      color: #c0c4cc;
    }
  }
  &.disabled {
    cursor: not-allowed;
  }
  /*部分选择状态*/
  &.some-select {
    .h-checkbox-inner {
      border: 1px solid #409eff;
      background-color: #409eff;
      &:after {
        height: 5px;
        background: #fff;
        opacity: 1;
        position: absolute;
        left: -2px;
        top: 3px;
        width: 15px;
        display: block;
        visibility: visible;
        content: "";
      }
    }
  }
}
</style>