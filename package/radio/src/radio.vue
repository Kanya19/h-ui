<template>
  <label
    class="my-radio"
    :class="{
      'my-radio-selected': selected,
      'my-radio-disabled': disabled || myDisabled,
      [`my-radio-${size}-border`]: border,
      [`my-radio-${size}-button`]: button,
      'my-radio-selected-button': selected && button,
    }"
  >
    <input
      class="my-radio-input"
      type="radio"
      @click="onClick"
      :disabled="disabled || myDisabled"
    />
    <span
      class="my-radio-icon"
      :class="{
        'my-radio-icon-selected': selected,
        'my-radio-icon-disabled': disabled || myDisabled,
        'my-radio-icon-button': button
      }"
    >
    </span>
    <span class="my-radio-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
// 工具函数，用于判断传入的值是否符合条件
// import { oneOf } from '../../utils/assist'
// import Emitter from '../../mixins/emitter'
export default {
  name: 'HRadio',
  data() {
    return {
      selected: false, // 是否被选中
      myDisabled: false, // 内部的禁用属性，交由父级控制
      button: false, // 按钮样式
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: '',
    },
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否绘制边框
    border: {
      type: Boolean,
      default: false,
    },
    // 尺寸
    size: {
      // validator(value) {
      //   return oneOf(value, ['large', 'medium', 'small', 'mini'])
      // },
      type: String,
      default: 'medium',
    },
  },
  watch: {
    // 初始化判断是否已被选中
    value: {
      handler(newVal) {
        this.selected = this.value && this.value === this.label
      },
      immediate: true,
    },
  },
  mounted() {
    // 通知HRadioGroup组件调用on-radio-add方法，参数为当前radio实例
    this.dispatch('HRadioGroup', 'on-radio-add', this)
  },
  beforeDestroy() {
    // 移除时，调用HRadioGroup组件的on-radio-remove方法
    this.dispatch('HRadioGroup', 'on-radio-remove', this)
  },
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    onClick() {
      if (!this.selected) {
        this.$emit("change", true);
      }
      this.selected = true
      this.$emit('input', this.label)
      this.dispatch('HRadioGroup', 'on-radio-select', this)
    },
  },
}
</script>