<template>
  <div :class="{'h-radio-group':true,'h-radio-vertical':vertical}">
    <Radio
      v-for="(item, index) in data"
      :key="index"
      v-model="groupValue"
      :value="item.value"
      :disabled="disabled || item.disabled"
      @input="_change(item, $event)"
      >{{ item.label }}
    </Radio>
<!--    <slot/>-->
  </div>
</template>
<script>
import Radio from "./radio";
export default {
  name: "HRadioGroup",
  data() {
    return {
      groupValue: this.value,
    };
  },
  watch: {
    value(v) {
      this.groupValue = v;
    },
  },
  props: {
    value: {},
    data: Array,
    disabled: {
      // 控制整个组
      type: Boolean,
      default: false,
    },
    vertical: {
      // 控制整个组
      type: Boolean,
      default: false,
    },
  },
  components: { Radio },
  methods: {
    _change(item, value) {
      this.$emit("input", value);
      this.$emit("change", value, item);
    },
  },
  mounted() {
    // console.log('slot',this.$slots)
    // if (this.vertical) {
    //   for (let i = 0; i < this.$children.length; i++) {
    //     this.$children[i].vertical = true
    //   }
    // }
  },
};
</script>

<style lang="less" scoped>
.h-radio-vertical {
  display: flex;
  flex-direction: column;
  .h-radio {
    margin-bottom: 20px;
  }
}
</style>
