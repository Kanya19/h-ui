<style lang="less" scoped>
.tooltip-demo{margin-bottom: 30px}
  .tooltip-demo span{
    display: inline-block;
    vertical-align: middle;
    width: 55px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #f7f7f7;
    border: 1px solid #dddee1;
    border-radius: 3px;
    cursor: pointer;
    transition: all .5s;
    margin-right: 30px}
  .tooltip-demo span:hover {
    background: #fff;
    border-color: #36a1d3;}
  .tooltip-icon {
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-style: normal;
    background: #ddd;
    display: inline-block;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 30px} 
  .tooltip-align{color: red;background: #66b1ff}  
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

<template>
  <div>
    <div class="tooltip-demo">
       <h-tooltip content="这是提示内容这是提示内容"><span>上左</span></h-tooltip>
       <h-tooltip content="这是提示内容这是提示内容" direction="top"><span>上边</span></h-tooltip>
       <h-tooltip content="这是提示内容" direction="top-right"><span>上右</span></h-tooltip>
    </div>
    <div class="tooltip-demo">
       <h-tooltip direction="left" content="这是提示内容">
          <span>左边</span>
       </h-tooltip>
       <span></span>
       <h-tooltip direction="right" content="这是提示内容"><span>右边</span></h-tooltip>
    </div>
    <div class="tooltip-demo">
       <h-tooltip direction="bottom-left" content="这是提示内容"><span>下左</span></h-tooltip>
       <h-tooltip direction="bottom" content="这是提示内容"><span>下边</span></h-tooltip>
       <h-tooltip direction="bottom-right" content="这是提示内容"><span>下右</span></h-tooltip>
    </div>
</div>

:::demo

```html

<template>
  <div>
    <div class="tooltip-demo">
       <h-tooltip content="这是提示内容这是提示内容"><span>上左</span></h-tooltip>
       <h-tooltip content="这是提示内容这是提示内容" direction="top"><span>上边</span></h-tooltip>
       <h-tooltip content="这是提示内容" direction="top-right"><span>上右</span></h-tooltip>
    </div>
    <div class="tooltip-demo">
       <h-tooltip direction="left" content="这是提示内容">
          <span>左边</span>
       </h-tooltip>
       <span></span>
       <h-tooltip direction="right" content="这是提示内容"><span>右边</span></h-tooltip>
    </div>
    <div class="tooltip-demo">
       <h-tooltip direction="bottom-left" content="这是提示内容"><span>下左</span></h-tooltip>
       <h-tooltip direction="bottom" content="这是提示内容"><span>下边</span></h-tooltip>
       <h-tooltip direction="bottom-right" content="这是提示内容"><span>下右</span></h-tooltip>
    </div>
</div>

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
