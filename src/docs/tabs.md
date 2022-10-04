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
  }
}
</script>

# tabs 选项卡

----

### 基础用法

<div class="demo-block">
  <h-tabs>
    <h-tab-pane label="用户管理">用户管理</h-tab-pane>
    <h-tab-pane label="配置管理">配置管理</h-tab-pane>
    <h-tab-pane label="角色管理">角色管理</h-tab-pane>
    <h-tab-pane label="定时任务补偿">定时任务补偿</h-tab-pane>
  </h-tabs>
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

<div>
  <h-tabs>
    <h-tab-pane label="用户管理">用户管理</h-tab-pane>
    <h-tab-pane label="配置管理">配置管理</h-tab-pane>
    <h-tab-pane label="角色管理">角色管理</h-tab-pane>
    <h-tab-pane label="定时任务补偿">定时任务补偿</h-tab-pane>
  </h-tabs>
</div>

```

:::


----

### 设置禁用项

<template>
<div class="demo-block">
  <h-tabs>
    <h-tab-pane label="用户管理">用户管理</h-tab-pane>
    <h-tab-pane label="配置管理" :disabled="true">配置管理</h-tab-pane>
    <h-tab-pane label="角色管理">角色管理</h-tab-pane>
    <h-tab-pane label="定时任务补偿">定时任务补偿</h-tab-pane>
  </h-tabs>
  </div>
</template>

:::demo

```html

<template>
  <h-tabs>
    <h-tab-pane label="用户管理">用户管理</h-tab-pane>
    <h-tab-pane label="配置管理" :disabled="true">配置管理</h-tab-pane>
    <h-tab-pane label="角色管理">角色管理</h-tab-pane>
    <h-tab-pane label="定时任务补偿">定时任务补偿</h-tab-pane>
  </h-tabs>
</template>

```

::: 