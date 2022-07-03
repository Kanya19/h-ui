<template>
  <div :class="['h-form-input',`h-form-input-${modalSize}`]">
    <span class="prefix-icon" v-if="$slots.prefix || prefixIcon">
      <i :class="['iconfont',prefixIcon]" v-if="prefixIcon"></i>
      <div :style="{
        width:($slots.prefix || prefixIcon)&&titleWidth,
        textAlign:'center'
      }" class="prefix-slot" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </div>
    </span>
    <input
      v-bind="$attrs"
      :value="value"
      :type="inputType"
      :style="{
        paddingLeft:($slots.prefix || prefixIcon)&&titleWidth,
        paddingRight:($slots.suffix || suffixIcon)&&titleWidth
      }"
      :class="{
        disabled: disabled,
        ['h-input-control']: true,
      }"
      :disabled="disabled"
      @input="_input"
      @focus="_focus"
      @blur="_blur"
      ref="input"
    />
    <span class="suffix-icon">
      <div :style="{
        width:($slots.suffix || suffixIcon)&&titleWidth,
        textAlign:'center'
      }" class="suffix-slot" v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </div>
      <i :class="[suffixIcon,'iconfont']" v-if="suffixIcon"></i>
      <i class="iconfont icon-close-circle" v-if="clearable && value" @click.stop="_clear"></i>
      <i
        :class="{'iconfont':true ,'icon-eye-close': eyeShow, 'icon-eye': !eyeShow }"
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
  },
  props: {
    size: {
      type: String,
    },
    titleWidth: {
      type: String,
      default: '30px'
    },
    value: null,
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    clearable: {
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
  computed: {
    modalSize() {
      switch (this.size) {
        case 'small':
        case 'normal':
        case 'large':
          return this.size
        default:
          return 'normal'
      }
    }
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.h-form-input {
  display: inline-block;
  position: relative;
  &.h-form-input-small {
    .h-input-control {
      height: 24px;
      line-height: 24px;
    }
  }
  &.h-form-input-normal {
    .h-input-control {
      height: 36px;
      line-height: 36px;
    }
  }
  &.h-form-input-large {
    .h-input-control {
      height: 48px;
      line-height: 48px;
    }
  }
  .h-input-control {
    border: 1px solid #ddd;
    border-radius: 3px;
    background: none;
    outline: none;
    padding: 4px 10px;
    font-size: 14px;
    overflow: hidden;
    box-sizing: border-box;
    width: 300px;

    &:hover {
      border-color: #ccc;
    }

    &:focus,
    &.focus {
      border-color: #39c5bb;
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
  .suffix-icon {
    position: relative;

    > i {
      right: 0;
    }
  }

  .prefix-icon {
    position: relative;

    > i {
      left: 0;
    }
  }

  .prefix-slot {
    position: absolute;
    transform: translateY(-50%);
    left: 0;
    top: 50%;
  }

  .suffix-slot {
    position: absolute;
    transform: translateY(-50%);
    right: 0;
    top: 50%;
  }

  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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
</style>
