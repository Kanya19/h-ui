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
  },
   methods: {
    disabledDate2 (time) {
      console.log('time',time)
      const day = time.getFullYear()
      return day < 2018 || day > 2023
      /* const min = new Date(2018,2)
      const max = new Date(2019,10)
      return time <min || time > max */
    }
  }
}
</script>

# date-picker 时间选择器

----

### 基础用法

<div class="demo-block">
  <h-date-picker />
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
<div class="demo-block">
  <h-date-picker />
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

### 年选择器

<div class="demo-block">
  <h-date-picker type="year" />
  <!-- <p>限制选择范围</p>
  <div class="demo-block">
    <h-date-picker type="year" :disabledDate="disabledDate2" />
  </div> -->
</div>

:::demo
```html
<div class="demo-block">
  <h-date-picker type="year" />
  <!-- <p>限制选择范围</p>
  <div class="demo-block">
    <h-date-picker type="year" :disabledDate="disabledDate2" />
  </div> -->
</div>
```

:::

### 月选择器

<div class="demo-block">
    <h-date-picker type="month" />
  <!-- <p>限制选择范围</p>
  <div class="demo-block">
    <h-date-picker type="year" :disabledDate="disabledDate2" />
  </div> -->
</div>

:::demo
```html
<div class="demo-block">
  <div class="demo-block">
    <h-date-picker type="month" />
  </div>
  <!-- <p>限制选择范围</p>
  <div class="demo-block">
    <h-date-picker type="year" :disabledDate="disabledDate2" />
  </div> -->
</div>
```

:::

### 日选择器

<div class="demo-block">
    <h-date-picker type="date" />
  <!-- <p>限制选择范围</p>
  <div class="demo-block">
    <h-date-picker type="year" :disabledDate="disabledDate2" />
  </div> -->
</div>

:::demo
```html
<div class="demo-block">
    <h-date-picker type="date" />
  <!-- <p>限制选择范围</p>
  <div class="demo-block">
    <h-date-picker type="year" :disabledDate="disabledDate2" />
  </div> -->
</div>
```