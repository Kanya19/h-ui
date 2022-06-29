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