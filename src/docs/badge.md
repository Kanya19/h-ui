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

# Badge 标记

----

### 基础用法

<div class="demo-block">
  <h-badge :value="12">
    <h-button>评论</h-button>
  </h-badge>
  <h-badge :value="2">
    <h-button>回复</h-button>
  </h-badge>
</div>

:::demo

```html

<h-badge :value="12">
  <h-button>评论</h-button>
</h-badge>
<h-badge :value="2">
  <h-button>回复</h-button>
</h-badge>

```

:::