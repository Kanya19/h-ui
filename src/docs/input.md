<script>
  export default {
    data() {
      return {
        input: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: ''
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .demo-block
    >div {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
</style>

# Input 输入框

----

### 基础用法

<div class="demo-block">
  <h-input v-model="input1"  placeholder="请输入内容"></h-input>
</div>

<script>
  export default {
    data() {
      return {
        input1: ''
      }
    }
  }
</script>

:::demo

```html

<h-input v-model="input1" placeholder="请输入内容"></h-input>

<script>
  export default {
    data() {
      return {
        input1: ''
      }
    }
  }
</script>

```

:::

### 禁用状态

<div class="demo-block">
  <h-input :disabled="true" placeholder="请输入内容"></h-input>
</div>
<script>
  export default {
    data() {
      return {
        input2: ''
      }
    }
  }
</script>

:::demo

```html

<h-input :disabled="true" v-model="input2" placeholder="请输入内容"></h-input>

<script>
  export default {
    data() {
      return {
        input2: ''
      }
    }
  }
</script>

```

:::

### 大小

<div class="demo-block">
  <h-input size="small" placeholder="请输入内容"></h-input>
  <h-input size="normal" placeholder="请输入内容"></h-input>
  <h-input size="large" placeholder="请输入内容"></h-input>
</div>
<script>
  export default {
    data() {
      return {
        input2: ''
      }
    }
  }
</script>

:::demo

```html

<h-input :disabled="true" v-model="input2" placeholder="请输入内容"></h-input>

<script>
  export default {
    data() {
      return {
        input2: ''
      }
    }
  }
</script>

```


:::

### input前置与后置

<div class="demo-block">
  <h-input :prefix-icon="'icon-user'" style="margin-right: 20px" v-model="input3" placeholder="请输入内容"></h-input>
  <h-input :title-width="'60px'" v-model="input4" placeholder="请输入内容">
    <div style="white-space: nowrap" slot="prefix">请输入</div>
  </h-input>
</div>
<div class="demo-block">
  <h-input :suffix-icon="'icon-user'" style="margin-right: 20px" v-model="input5" placeholder="请输入内容"></h-input>
  <h-input :title-width="'60px'" v-model="input6" placeholder="请输入内容">
    <div style="white-space: nowrap" slot="suffix">请输入</div>
  </h-input>
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

<div>
  <h-input :prefix-icon="'icon-user'" v-model="input" placeholder="请输入内容"></h-input>
  <h-input :title-width="'60px'" v-model="input" placeholder="请输入内容">
    <div style="white-space: nowrap" slot="prefix">请输入</div>
  </h-input>
</div>
<div>
  <h-input :suffix-icon="'icon-user'" :showEye="true" v-model="input" placeholder="请输入内容"></h-input>
  <h-input :title-width="'60px'" v-model="input" placeholder="请输入内容">
    <div style="white-space: nowrap" slot="suffix">请输入</div>
  </h-input>
</div>
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

### input可清空

<div class="demo-block">
  <h-input  v-model="input7" clearable placeholder="请输入内容"></h-input>
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

<div>
  <h-input :prefix-icon="'icon-user'" v-model="input" placeholder="请输入内容"></h-input>
  <h-input :title-width="'60px'" v-model="input" placeholder="请输入内容">
    <div style="white-space: nowrap" slot="prefix">请输入</div>
  </h-input>
</div>
<div>
  <h-input :suffix-icon="'icon-user'" :showEye="true" v-model="input" placeholder="请输入内容"></h-input>
  <h-input :title-width="'60px'" v-model="input" placeholder="请输入内容">
    <div style="white-space: nowrap" slot="suffix">请输入</div>
  </h-input>
</div>
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

### input密码框

<div class="demo-block">
  <h-input type="password" v-model="input8" placeholder="请输入内容"></h-input>
  <h-input :show-eye="true" type="password" v-model="input9" placeholder="请输入内容"></h-input>
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

<div>
  <h-input :prefix-icon="'icon-user'" v-model="input" placeholder="请输入内容"></h-input>
  <h-input :title-width="'60px'" v-model="input" placeholder="请输入内容">
    <div style="white-space: nowrap" slot="prefix">请输入</div>
  </h-input>
</div>
<div>
  <h-input :suffix-icon="'icon-user'" :showEye="true" v-model="input" placeholder="请输入内容"></h-input>
  <h-input :title-width="'60px'" v-model="input" placeholder="请输入内容">
    <div style="white-space: nowrap" slot="suffix">请输入</div>
  </h-input>
</div>
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
 ### Attributes
| 参数     | 说明           | 类型    | 可选值                                             | 默认值 |
| -------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size     | 尺寸           | string  | small / normal / large | normal      |
| type     | 类型           | string  | password  | —      |
| change   | 输入框内容变化时的回调	   | function(e)	 | —    | -  |
| disabled | 是否禁用状态   | boolean | — | false  |
| prefixIcon | 前置图标容器| String| — | -  |
| suffixIcon | 后置图标容器| String| — | -  |
| clearable | 清除图标| String| — | -  |
