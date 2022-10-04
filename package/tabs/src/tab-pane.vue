<template>
  <div
    class="tab-pane"
    :class="{ active: tabName === $parent.active }"
    v-show="tabName === $parent.active"
  >
    <slot v-if="$parent.showContent"></slot>
  </div>
</template>
<script>
export default {
  name: `HTabPane`,
  data() {
    return {
      tabName: this.name || "tab-" + this.$parent.tabName,
    };
  },
  created() {
    this.$parent.tabName++;
    this.tabName = this.name || "tab-" + this.$parent.tabName;
  },
  props: {
    label: String,
    name: String,
    disabled: Boolean,
  },
  mounted() {
    this.$parent.panes.push(this);
  },
};
</script>
<style lang="less" scoped>
@import "./tabs.less";
</style>