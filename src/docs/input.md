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

# Input 输入框

----


### 基础用法

<div class="demo-block">
  <h-input v-model="input"  placeholder="请输入内容"></h-input>
</div>

:::demo 



```html
<h-input v-model="input"  placeholder="请输入内容"></h-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

```
:::
### 禁用状态
<div class="demo-block">
  <h-input :disabled="true" v-model="input" placeholder="请输入内容"></h-input>
</div>
<script>
export default {
  data() {
    return {
      disabled: true,
      input: ''
    }
  }
}
</script>

:::demo 



```html
<h-input :disabled="disabled" v-model="input" placeholder="请输入内容"></h-input>

<script>
export default {
  data() {
    return {
      input: ''
      disabled: true
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
