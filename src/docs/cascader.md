# Cascader 联级选择器 

### 基本用法
<template>
	<h-cascader :list = "list" @change = "getList"></h-cascader>
</template>
<script>
  export default {
    data() {
      return {
        list: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                      children: [
                        {
                          value: "tiqiu",
                          label: "踢球",
                          disabled: true,
                        },
                        {
                          value: "shuijiao",
                          label: "睡觉",
                        },
                      ],
                    },
                    {
                      value: "tuanjie",
                      label: "团结",
                      children: [
                        {
                          value: "chifan",
                          label: "吃饭",
                          disabled: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  value: "kaoshiguize",
                  label: "考试规则",
                  children: [
                    {
                      value: "anjing",
                      label: "安静",
                      children: [
                        {
                          value: "zuobi",
                          label: "作弊",
                        },
                        {
                          value: "jiaojuan",
                          label: "交卷",
                          disabled: true,
                        },
                      ],
                    },
                    {
                      value: "lianhe",
                      label: "联合",
                      children: [
                        {
                          value: "shuxue",
                          label: "数学",
                        },
                      ],
                    },
                  ],
                },
              ],
            }
         },
         methods: {
            getList(data) {
              console.log(data);
            },
         },
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









