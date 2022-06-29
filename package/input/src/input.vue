<template>
  <div
    class="h-input"
    :class="[
      {
        'is-disabled': disabled,
      },
    ]"
  >
    <input
      :readonly="readonly"
      :name="name"
      :autofocus="autofocus"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @keyup="handleKeyup"
      @input="changeInput"
      :disabled="disabled"
      class="h-input__inner"
      :value="value"
      :placeholder="placeholder"
    />
    <span class="h-input__clearable" v-if="clearable && value" @click="clear">
      <i style="font-size: 12px" class="h-icon-close"></i>
    </span>
  </div>  
</template>
<script>
export default {
  name: "HInput",

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: String,
    autofocus: Boolean,
    readonly: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputClearable() {
      return this.clearable;
    },
  },
  methods: {
    handleKeyup(e) {
      this.$emit("keyUp", e);
    },
    handleChange() {
      this.$emit("change", this.value, this.name);
    },
    clear() {
      this.$emit("input", "");
      this.$emit("clear");
    },
    handleFocus(e) {
      this.$emit("focus", e);
    },
    handleBlur(e) {
      this.$emit("blur", e);
    },
    changeInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped>
.h-input {
  width: 180px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
}
.h-input__inner {
  cursor: pointer;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

.h-input__inner:hover {
  border-color: #c0c4cc;
}
.h-input__inner:focus {
  outline: none;
  border-color: #39c5bb;
}
.h-input.is-disabled .h-input__inner {
  background-color: #f5f7fa;
  border-color: #dcdfe6;
  color: #c0c4cc;
  cursor: not-allowed;
}
.h-input.is-disabled .h-input__inner:hover {
  border-color: #dcdfe6;
}
.h-input__clearable {
  position: relative;
  font-size: 12px;
  right: 30px;
}
</style>
