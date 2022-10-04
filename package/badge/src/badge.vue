<template>
  <span :class="{ ['h-badge']: true, dot: isDot }">
    <slot></slot>
    <sup v-html="showValue"></sup>
  </span>
</template>

<script>
export default {
  name: `HBadge`,
  props: {
    value: [String, Number],
    dot: Boolean,
    max: Number,
  },
  methods: {},
  computed: {
    showValue() {
      // value为数字
      if (!isNaN(this.value) && this.value > this.max) {
        return this.max + "+";
      } else {
        return this.value;
      }
    },
    isDot() {
      // value有值，并dot为true时
      return this.value && this.dot;
    },
  },
  mounted() {},
};
</script>
<style lang="less">
@import "./badge.less";
</style>
