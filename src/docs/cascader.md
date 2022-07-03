# Cascader 联级选择器 

### 基本用法
<template>
	<div>
    <p>当前值：{{value1}}</p>
    <h-cascader v-model="value1" placeholder="请选择"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1:[]
      }
   }
  }
</script>

:::demo
```html
<div class="demo-block">
  <h-carousel class="test-h-carousel">
    <h-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </h-carousel-item>
  </h-carousel>
</div>
<style>
  .test-h-carousel {
    background-image: radial-gradient(ellipse farthest-corner at 50% 70%, #dee1e2 20%, #edf0f1 30%, #c3c6c7 60%);
  }

  .test-h-carousel .h-carousel-item {
    background: #969896
  }

  .test-h-carousel h3{
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>

```
:::

### Carousel Attributes

| 参数   | 说明         | 类型   | 可选值         | 默认值  |
| ------ | ------------ | ------ | -------------- | ------- |
| height | 走马灯的高度 | string | -------------  | '500px' |
| width  | 走马灯的宽度 | string | -------------- | '100%'  |









