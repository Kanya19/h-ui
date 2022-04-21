<template>
  <li class="h_option" @click="currentSelect">
    <div class="h_option_dropdown_item">{{ label }}</div>
  </li>
</template>

<script>
export default {
  name: "HOption",
  components: {},
  props: {
    width: {
      type: Number,
      default: -1,
    },
    height: {
      type: Number,
      default: 34,
    },
    label: {
      type: String,
    },
    optionid: {
      type: String,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {
    styleVar() {
      return {
        "--option-height": this.height + "px",
        "--option-width": this.width == -1 ? "100%" : this.width + "px",
      };
    },
  },
  methods: {
    currentSelect() {
      this.$parent.label = this.label;
      this.$parent.optionid = this.optionid;
      this.$parent.isListShow = !this.$parent.isListShow;
      // this.$emit('slot-content', {label: this.label, optionid: this.optionid} );
    },
  },
};
</script>
<style scoped lang="less">
.h_option {
  list-style: none;
  height: var(--option-height);
  width: var(--option-width);
}
.h_option:hover {
  color: #39c5bb;
  font-weight: 500;
  background-color: #f5f7fa;
}
.h_option_dropdown_item {
  height: 100%;
  width: calc(100% - 30px);
  line-height: var(--option-height);
  cursor: pointer;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
