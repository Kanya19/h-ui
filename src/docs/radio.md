<style lang="stylus" scoped>
  .demo-block {
    >div {
      margin-bottom: 20px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>

# radio 单选框

----


### 基础用法

<div class="demo-block">
  <!-- <h-radio-group v-model="value"> -->
    <h-radio :value="1">多选框1</h-radio>
    <h-radio :value="2">多选框2</h-radio>
  <!-- </h-radio-group> -->
  {{value}}
</div>
<script>
export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>

:::demo 



```html
<div class="demo-block">
  <h-radio-group v-model="value">
    <h-radio :label="1">多选框1</h-radio>
    <h-radio :label="2">多选框2</h-radio>
  </h-radio-group>
</div>
<script>
export default {
  data() {
    return {
      value: 1
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
| icon     | 图标类名       | string  | —                                                  | —      | --> |
