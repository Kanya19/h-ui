<template>
  <div class="h-radio">
    <input
      id="radio"
      type="radio"
      class="h-radio__original"
      :value="value"
      @input="changeInput"
    />
    <label for="radio">123</label>
  </div>
</template>
<script>
export default {
  name: "HRadio",

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
.h-radio {
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
.h-radio__original {
}
</style>
