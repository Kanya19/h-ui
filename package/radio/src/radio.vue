<!-- Created by 337547038 on 2018/9/7 0007. -->
<template>
  <label
    :class="{
      disabled: disabled,
      checked: checked === value,
      ['h-radio']: true,
    }"
  >
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
  </label>
</template>
<script>
export default {
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
      this.$emit("input", emitValue);
      this.$emit("change", emitValue);
    },
  },
  mounted() {},
  computed: {},
};
</script>