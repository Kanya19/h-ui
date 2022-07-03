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
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value2: []
    }
  }
}
</script>

# select 下拉框

----

### 基础用法

<div class="demo-block">
  <h-select :options="options" v-model="value" />
</div>

:::demo

```html

<div>
  <h-checkbox>多选框</h-checkbox>
</div>

<script>
  export default {
    data() {
      return {
        checked: true
      }
    }
  }
</script>

```

:::

### 基础用法

<div class="demo-block">
  <h-select :multiple="true" :options="options" v-model="value2" />
</div>

:::demo

```html

<div>
  <h-checkbox>多选框</h-checkbox>
</div>

<script>
  export default {
    data() {
      return {
        checked: true
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
| icon     | 图标类名       | string  | —                                                  | —      |

