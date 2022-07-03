<script>
  export default {
    data() {
      return {
        selectText: ["请选择省", "请选择市", "请选择区"],
        value1:[],
        data:[{
          name:'浙江1',
          children:[
            {
              name:'杭州1',
              children: [
                {name:'萧山1'},
                {name:'滨江1'},
              ]
            },
            {
              name:'衢州1',
              children: [
                {name:'常山1'},
                {name:'开化1'},
              ]
            }
          ]
        },{
          name:'浙江2',
          children:[
            {
              name:'杭州2',
              children: [
                {name:'萧山2'},
                {name:'滨江2'},
              ]
            }
          ]
        }]
      }
   }
  }
</script>

# cascader 联级选择器

### 基本用法

<template>
	<div>
    <p>当前值：{{value1}}</p>
    <h-cascader clearable :data="data" v-model="value1" placeholder="请选择"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectText: [],
        value1:[],
        data:[{
          name:'浙江',
          children:[
            {
              name:'杭州',
              children: [
                {name:'萧山'},
                {name:'滨江'},
              ]
            },
            {
              name:'衢州',
              children: [
                {name:'常山'},
                {name:'开化'},
              ]
            }
          ]
        },{
          name:'浙江',
          children:[
            {
              name:'杭州',
              children: [
                {name:'萧山'},
                {name:'滨江'},
              ]
            }
          ]
        }]
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

  .test-h-carousel h3 {
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

### type card 模式

<template>
	<div>
    <p>当前值：{{value1}}</p>
    <h-cascader type="card" :select-text="selectText" :data="data" v-model="value1" placeholder="请选择"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectText: ["请选择省", "请选择市", "请选择区"],
        value1:[],
        data:[{
          name:'浙江',
          children:[
            {
              name:'杭州',
              children: [
                {name:'萧山'},
                {name:'滨江'},
              ]
            },
            {
              name:'衢州',
              children: [
                {name:'常山'},
                {name:'开化'},
              ]
            }
          ]
        },{
          name:'浙江',
          children:[
            {
              name:'杭州',
              children: [
                {name:'萧山'},
                {name:'滨江'},
              ]
            }
          ]
        }]
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

  .test-h-carousel h3 {
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

[comment]: <> (### Carousel Attributes)

[comment]: <> (| 参数   | 说明         | 类型   | 可选值         | 默认值  |)

[comment]: <> (| ------ | ------------ | ------ | -------------- | ------- |)

[comment]: <> (| height | 走马灯的高度 | string | -------------  | '500px' |)

[comment]: <> (| width  | 走马灯的宽度 | string | -------------- | '100%'  |)









