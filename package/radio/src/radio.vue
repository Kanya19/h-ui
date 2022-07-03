<!-- Created by 337547038 on 2018/9/7 0007. -->
<template>
  <label
    :class="{
      disabled: disabled,
      checked: checked === value,
      ['h-radio']: true,
    }"
  >
    <template  v-if="modalType==='normal'">
      <input
        type="radio"
        v-model="checked"
        :value="value"
        @change="_onChange"
        :disabled="disabled"
      />
      <span class="radio-inner"></span>
      <span class="radio-text" v-if="$slots.default">
      <slot />
    </span>
      <span class="radio-text" v-if="label" v-html="label"></span>
    </template>
<!--    <h-button-->
<!--      v-if="modalType==='button'"-->
<!--      @click="_onChange"-->
<!--      :disabled="disabled"-->
<!--    >-->
<!--      <slot />-->
<!--    </h-button>-->

  </label>
</template>
<script>
import HButton from '../../button/src/button'
export default {
  components:{
    'h-button' :HButton
  },
  name: "HRadio",
  data() {
    return {
      checked: this.modelValue,
    };
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
    optionType: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Boolean, Number],
      default: true,
    },
    modelValue: {},
    label: String,
  },
  watch: {
    modelValue(v) {
      this.checked = v;
    },
  },
  methods: {
    _onChange(e) {
      let emitValue = e.target.value || true;
      console.log('e',e,'_onChange')
      console.log('emitValue',emitValue)
      this.$emit("input", emitValue);
      this.$emit("change", emitValue);
    },
  },
  mounted() {},
  computed: {
    modalType() {
      switch (this.optionType) {
        case 'button':
          return this.optionType
        default:
          return 'normal'
      }
    }
  },
};
</script>

<style lang="less" scoped>
.disabled {
  cursor: not-allowed;
  input {
    cursor: not-allowed;
  }
  .radio-text {
    color: #999;
  }
}
</style>
