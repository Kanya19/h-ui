<style lang="stylus" scoped>
  .demo-block
    >div {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

</style>
<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: true
    }
  }
}
</script>

# checkbox 多选框

----

### 基础用法

<div class="demo-block">
  <h-checkbox :disabled="true">多选框</h-checkbox>
  <h-checkbox v-model="checked1">多选框</h-checkbox>
  <h-checkbox v-model="checked2">多选框</h-checkbox>
</div>

<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: true
    }
  }
}
</script>

:::demo

```html

<div>
  <h-checkbox :disabled="true">多选框</h-checkbox>
  <h-checkbox v-model="checked1">多选框</h-checkbox>
  <h-checkbox v-model="checked2">多选框</h-checkbox>
</div>

<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      }
    }
  }
</script>

```

:::

<!-- ### Attributes
| 参数     | 说明           | 类型    | 可选值                                             | 默认值 |
| -------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size     | 尺寸           | string  | medium / small / mini                              | —      |
| type     | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain    | 是否朴素按钮   | boolean | —                                                  | false  |
| round    | 是否圆角按钮   | boolean | —                                                  | false  |
| circle   | 是否圆形按钮   | boolean | —                                                  | false  |
| loading  | 是否加载中状态 | boolean | —                                                  | false  |
| disabled | 是否禁用状态   | boolean | —                                                  | false  |
| icon     | 图标类名       | string  | —                                                  | —      | -->
