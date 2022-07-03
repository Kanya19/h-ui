<template>
  <div :class="`h-form-input`">
    <input
      v-bind="$attrs"
      :value="value"
      :type="inputType"
      :class="{
        disabled: disabled,
        ['h-input-control']: true,
        'has-prefix': $slots.prefix || prefixIcon,
      }"
      :disabled="disabled"
      @input="_input"
      @focus="_focus"
      @blur="_blur"
      ref="input"
    />
    <span class="prefix-icon" v-if="$slots.prefix || prefixIcon">
      <i :class="[prefixIcon]" v-if="prefixIcon"></i>
      <slot name="prefix"></slot>
    </span>
    <span class="suffix-icon">
      <slot name="suffix"></slot>
      <i :class="[suffixIcon]" v-if="suffixIcon"></i>
      <i class="icon-close" v-if="clear && value" @click.stop="_clear"></i>
      <i
        :class="{ 'icon-eye-close': eyeShow, 'icon-eye': !eyeShow }"
        v-if="value && showEye && type === 'password'"
        @click.stop="eyeShow = !eyeShow"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: "HInput",
  data() {
    return {
      inputType: this.type, // 密码框时要切换，所以...
      eyeShow: false,
    };
  },
  inheritAttrs: false,
  watch: {
    eyeShow(value) {
      // 显示或隐藏密码
      this.inputType = value ? "text" : "password";
    },
    value(val) {
      console.log(val);
    },
  },
  props: {
    value: null,
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    clear: {
      type: Boolean,
      default: false,
    },
    showEye: {
      // 密码框显示眼睛，可切换为明文密码
      type: Boolean,
      default: false,
    },
    change: Function,
    prefixIcon: String, // 前缀icon
    suffixIcon: String, // 后缀icon
  },
  components: {},
  methods: {
    _blur(e) {
      // const value = e.target.value
      this._emit("blur", e);
    },
    _input(e) {
      const value = e.target.value;
      this.$emit("input", value);
      this.change && this.change(e);
    },
    _focus(e) {
      this._emit("focus", e);
    },
    _clear() {
      this._emit("input", "");
    },
    _emit(type, e) {
      this.$emit(type, e);
      // this[type] && this[type](e)
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style lang="less">
.h-form-input {
  display: inline-block;
  position: relative;
  .suffix-icon,
  .prefix-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .prefix-icon {
    left: 0;
    right: auto;
  }
  i {
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #999;
  }
  .icon-close {
    display: none;
    font-size: 14px;
  }
  &:hover {
    .icon-close {
      display: inline-block;
    }
  }
  .has-prefix {
    padding-left: 30px;
  }
}
.h-input-control {
  height: 38px;
  line-height: 38px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background: none;
  outline: none;
  padding: 0 10px;
  font-size: 14px;
  overflow: hidden;
  box-sizing: border-box;
  width: 300px;
  &:hover {
    border-color: #ccc;
  }
  &:focus,
  &.focus {
    border-color: #f60;
  }
  &.placeholder {
    color: #999;
  }
  /*禁用状态*/
  &.disabled {
    background: #eee;
    cursor: not-allowed;
  }
  .h-form-item-error {
    .h-input-control {
      border-color: red;
    }
  }
}
</style>