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
      value: false,
      data1: [
        {label: '选项1', value: 'a1'},
        {label: '选项2', value: 'a2'},
        {label: '选项3', value: 'a3'},
        {label: '选项4', value: 'a4'},
        {label: '禁用', value: 'a5', disabled: true}
      ]
    }
  }
}
</script>
# radio 单选框

----

### 基础用法

<div class="demo-block">
  <h-radio v-model="value" style="margin-right: 10px">多选框1</h-radio>
  <h-radio :disabled="true">多选框1</h-radio>
</div>
<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
</script>

:::demo

```html

<div>
  <h-radio v-model="value">多选框1</h-radio>
</div>
<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  }
</script>

```

:::


### 单选框组（水平）

<div class="demo-block">
  <h-radio-group :data="data1" v-model="value">
  </h-radio-group>
</div>
<script>
export default {
  data() {
    return {
      value: false,
      data1: [
        {label: '选项1', value: 'a1'},
        {label: '选项2', value: 'a2'},
        {label: '选项3', value: 'a3'},
        {label: '选项4', value: 'a4'},
        {label: '禁用', value: 'a5', disabled: true}
      ]
    }
  }
}
</script>

:::demo

```html

<div>
  <h-radio v-model="value">多选框1</h-radio>
</div>
<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  }
</script>

```

:::

### 单选框组（垂直）

<div class="demo-block">
  <h-radio-group :vertical="true" :data="data1" v-model="value">
  </h-radio-group>
</div>
<script>
export default {
  data() {
    return {
      value: false,
      data1: [
        {label: '选项1', value: 'a1'},
        {label: '选项2', value: 'a2'},
        {label: '选项3', value: 'a3'},
        {label: '选项4', value: 'a4'},
        {label: '禁用', value: 'a5', disabled: true}
      ]
    }
  }
}
</script>

:::demo

```html

<div>
  <h-radio v-model="value">多选框1</h-radio>
</div>
<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  }
</script>

```

:::

### 按钮样式

<div class="demo-block">
  <h-radio option-type="button" :disabled="true"  style="margin-right: 10px">多选框1</h-radio>
<h-radio option-type="button" style="margin-right: 10px">多选框1</h-radio>
  {{value}}
</div>
<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
</script>

:::demo

```html

<div>
  <h-radio option-type="button" :disabled="true" v-model="value">多选框1</h-radio>
</div>
<script>
  export default {
    data() {
      return {
        value: false
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
