<template>
  <div class="h-checkbox">
    <input
      id="checkbox"
      type="checkbox"
      class="h-checkbox__original"
      :value="value"
      @input="changeInput"
    />
    <label for="checkbox">123</label>
  </div>
</template>
<script>
export default {
  name: "HCheckbox",

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validator");
    },
  },
};
</script>

<style scoped>
.h-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
}
.h-checkbox__original {
}
</style>
