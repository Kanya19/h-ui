<!--Created by 337547038 on 2017/12/26.-->
<template>
  <div :class="'h-cascader'">
    <div
      :class="{
        ['h-input-control']: true,
        focus: show,
        placeholder: showPlaceholder,
        disabled: disabled,
      }"
      v-text="showValue"
    ></div>
    <i
      class="clearable iconfont icon-close-circle"
      v-if="clearable && value.length > 0"
      @click="_clearClick"
    ></i>
    <div class="cascader-down-box">
      <transition name="slide-toggle">
        <div v-if="type==='card'" class="cascader-down card" v-show="show" @click="_stopPropagation">
          <p class="tips" v-text="tipsText" v-if="tipsText"></p>
          <div v-if="selectText.length" class="cascader-tab">
            <ul class="clearfix">
              <li
                :class="{ active: index === activeLayer }"
                v-for="(item, index) in selectText"
                v-show="selectValue.length>=index"
                v-text="selectValue[index]?selectValue[index].name:item"
                :key="index"
                @click="activeLayer = index"
              ></li>
            </ul>
          </div>
          <div class="cascader-area">
            <ul class="clearfix">
              <li
                v-for="(item, index) in children"
                :title="item.name"
                :key="index"
              >
                <a v-text="item.name" @click="_childrenClick(item,index)"></a>
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="cascader-down" v-show="show">
          <div class=" first" @click="_stopPropagation">
            <p class="tips" v-text="tipsText" v-if="tipsText"></p>
            <div class="cascader-area">
              <ul class="clearfix">
                <li
                  :class="{
                    active:index===firstIndex
                  }"
                  v-for="(item, index) in firstList"
                  :title="item.name"
                  :key="index"
                >
                  <a v-text="item.name" @click="_childrenClick(item,index,0)"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="second" v-show="selectValue[0]&&selectValue[0].name" @click="_stopPropagation">
            <p class="tips" v-text="tipsText" v-if="tipsText"></p>
            <div class="cascader-area">
              <ul class="clearfix">
                <li
                  :class="{
                    active:index===secondIndex
                  }"
                  v-for="(item, index) in secondList"
                  :title="item.name"
                  :key="index"
                >
                  <a v-text="item.name" @click="_childrenClick(item,index,1)"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="third" v-show="selectValue[1]&&selectValue[1].name" @click="_stopPropagation">
            <p class="tips" v-text="tipsText" v-if="tipsText"></p>
            <div class="cascader-area">
              <ul class="clearfix">
                <li
                  :class="{
                    active:index===thirdIndex
                  }"
                  v-for="(item, index) in thirdList"
                  :title="item.name"
                  :key="index"
                >
                  <a v-text="item.name" @click="_childrenClick(item,index,2)"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>

export default {
  name: `HCascader`,
  data() {
    return {
      show: false,
      selectValue: [], // 暂存的值，加工后的数组，同时保存了当前值所在数组的位置
      activeLayer: 0, // 当前第几级
      showValue: this.placeholder, // 用于展示的值，格式化后显示于输入框的值
      showPlaceholder: !!this.placeholder,
      firstIndex: '',
      secondIndex: '',
      thirdIndex: '',
    };
  },
  components: {},
  props: {
    value: Array,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    tipsText: String, // 下拉框下面的提示文字
    selectText: {
      type: Array,
      default: () => []
    },
    split: Array, // 分隔符
    type: {
      type: String,
      default: '',
    },
    data: {
      // 下拉选项数据
      type: Array,
      default: () => ["请选择", "请选择", "请选择"]
    },
    clearable: {
      // 显示清空按钮
      type: Boolean,
      default: true,
    },
    change: Function,
  },
  watch: {
    showValue() {
      const value = this._formatValue(true);
      this.$emit("input", value);
      this.$emit("change", value);
      this.change && this.change(value);
    },
  },
  methods: {
    _showHide(e) {
      if (this.$el.contains(e.target)) {
        if (this.disabled === true) {
          return;
        }
        this.show = !this.show;
      } else {
        this.show = false;
      }
    },
    __init() {
      let length = this.value.length;
      // 有值
      if (this.value && length > 0 && length <= 3) {
        // 有值时要默认在最后一级，根据当前和取当前位置拼成数组
        let data;
        for (let i = 0; i < length; i++) {
          if (i === 0) {
            data = this.data;
          } else if (i === 1) {
            const index = this.selectValue[0].index;
            data = this.data[index].children;
          } else if (i === 2) {
            const index = this.selectValue[0].index;
            const data1 = this.data[index].children;
            const index2 = this.selectValue[1].index;
            data = data1[index2].children;
          }
          this._setDefaultValue(data, i);
        }
        this.activeLayer = length - 1;
        this.showValue = this._formatValue();
      } else {
        this.selectValue = [];
      }
    },
    _setDefaultValue(data, index) {
      for (let i in data) {
        // 最后一个比较特别，是数组不是对象，没有name
        if ((data[i].name || data[i]) === this.value[index]) {
          this.selectValue.push({
            name: data[i].name || data[i],
            index: i,
          });
          break;
        }
      }
    },
    _childrenClick(item, index, activeLayer) {
      if (activeLayer !== undefined) {
        this.activeLayer = activeLayer
      }
      if (item.hasChild) {
        if (this.activeLayer === 0) {
          this.selectValue.splice(0, this.selectValue.length); // 清空
          // 写入当前项
          this.selectValue.push({
            name: item.name,
            index: index, // 当前值在数据组中的位置，for时就可以直接找到当前项
          });
          // 写入第二项
          this.firstIndex = index
          this.secondIndex = ''
          this.thirdIndex = ''
          this.selectValue.push({
            name: this.selectText[1],
          });
        } else if (this.activeLayer === 1) {
          // 将请选择修改为当前选择
          this.secondIndex = index
          this.thirdIndex = ''
          this.selectValue[1] = {
            name: item.name,
            index: index,
          };
          // 将第三级设为请选择
          this.selectValue[2] = {name: this.selectText[2]};
        }
        this.activeLayer++; // 跳到下一级
      } else {
        // 关闭下拉，将值给输入框，这里有可能是第二级
        this.thirdIndex = index
        this.selectValue[this.activeLayer] = {
          name: item.name,
          index: index,
        };
        // 如果只有二级时，这里清除下第三级，保证不出错
        if (this.activeLayer === 1) {
          this.selectValue.splice(2, 1);
        }
        this.showValue = this._formatValue();
        this.show = false;
        this.showPlaceholder = false;
      }
      console.log('this.selectValue', this.activeLayer, this.selectValue)
    },
    _formatValue(type) {
      // 将数组转为文本显示出来
      let val = "";
      let array = [];
      for (let i in this.selectValue) {
        if (type) {
          // 为真返回数组
          array.push(this.selectValue[i].name);
        } else {
          // 这里返回显示的值，即文本
          let split = "";
          if (this.split && this.split.length === 3) {
            split = this.split[i];
          }
          val += this.selectValue[i].name + split;
        }
      }
      return type ? array : val;
    },
    _stopPropagation(e) {
      e.stopPropagation();
    },
    _clearClick() {
      this.showValue = this.placeholder;
      this.selectValue = [];
      this.activeLayer = 0;
      this.$nextTick(() => {
        this.selectValue.push({
          name: this.selectText[0],
          index: 0,
        });
      });
    },
  },
  computed: {
    firstList() {
      let data = this.data;
      let array = [];
      for (let i in data) {
        array.push({
          name: data[i].name || data[i],
          hasChild: !!data[i].children,
          index: i,
        });
      }
      return array;
    },
    secondList() {
      if (this.activeLayer >= 1) {
        let array = [];
        let data = this.data;
        const index = this.selectValue[0].index;
        data = this.data[index].children;
        for (let i in data) {
          array.push({
            name: data[i].name || data[i],
            hasChild: !!data[i].children,
            index: i,
          });
        }
        return array;
      }
      return []
    },
    thirdList() {
      if (this.activeLayer === 2) {
        let array = [];
        let data = this.data;
        const index = this.selectValue[0].index;
        const data1 = this.data[index].children;
        const index2 = this.selectValue[1].index;
        data = data1[index2].children;
        for (let i in data) {
          array.push({
            hasChild: !!data[i].children,
            name: data[i].name || data[i],
            index: i,
          });
        }
        return array;
      }
      return []
    },
    children() {
      // 根据selectValue和当前的级数
      if (this.activeLayer === 0) {
        return this.firstList
      } else if (this.activeLayer === 1) {
        return this.secondList
      } else {
        return this.thirdList
      }
    },
  },
  mounted() {
    document.addEventListener("click", this._showHide);
    this.__init();
  },
  destroyed() {
    document.addEventListener("click", this._showHide);
  },
  filters: {},
};
</script>

<style lang="less" scoped>
.h-cascader {
  display: inline-block;
  position: relative;
  //用个标签挡住输入框底边线
  .mask {
    content: "";
    height: 2px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 36px;
    width: 100%;
    display: block;
    z-index: 100;
    //border-left: 1px solid #f60;
    //border-right: 1px solid #f60;
    box-sizing: border-box;
  }

  .h-input-control {
    position: relative;
    cursor: pointer;
    line-height: 24px;
    min-height: 36px;
    border: 1px solid #ddd;
    border-radius: 3px;
    background: none;
    outline: none;
    padding: 5px;
    font-size: 14px;
    //overflow: hidden;
    box-sizing: border-box;
    width: 300px;

    &:after {
      top: 0;
      content: "\e61a";
      display: block;
      position: absolute;
      right: 10px;
      height: 36px;
      line-height: 36px;
      transition: all 0.2s;
      cursor: pointer;
      font-family: "iconfont";
      font-size: 14px;
    }

    &.focus {
      border: 1px solid #39c5bb;

      &:after {
        transform: rotate(180deg);
      }
    }

    &:hover {
      + .icon-clear {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .clearable {
    transition: all 0.3s;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    cursor: pointer;
    z-index: 50;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;

    &:after {
      color: #999;
    }
  }

  .cascader-down-box {
    position: relative;
    bottom: 0;

    .cascader-down {
      position: absolute;
      top: 5px;
      z-index: 99;
      //overflow-x: hidden;
      border-radius: 3px;

      .first {
        position: relative;
        left: 0;
        height: 200px;
        width: 160px;
        border: 1px solid #39c5bb;
        background: #fff;
      }

      .second {
        height: 200px;
        width: 160px;
        border: 1px solid #39c5bb;
        background: #fff;
        position: absolute;
        top: 0;
        left: 159px;
      }

      .third {
        height: 200px;
        width: 160px;
        border: 1px solid #39c5bb;
        background: #fff;
        top: 0;
        position: absolute;
        left: 318px;
      }

      &.card {
        width: 360px;
        height: 200px;
        border: 1px solid #39c5bb;
        background: #fff;

        .cascader-area {
          li {
            float: left;
            width: 85px;
          }
        }
      }

      .tips {
        margin-bottom: 5px;
        font-size: 12px;
        font-weight: 700;
        color: #666;
      }

      .cascader-tab {
        height: 25px;
        line-height: 25px;
        border-bottom: 1px solid #ddd;

        li {
          float: left;
          padding: 0 10px;
          margin-right: 10px;
          border: 1px solid #ddd;
          color: #2d8cf0;
          font-weight: 700;
          background: #fff;
          cursor: pointer;
          height: 24px;
          line-height: 24px;
          border-bottom: 0;

          &.active {
            height: 25px;
          }
        }
      }

      .cascader-area {
        clear: both;
        overflow: hidden;

        .clearfix {
          margin: 0;
          padding: 0;
        }

        li {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-right: 3px;
          box-sizing: border-box;

          a {
            padding: 5px 10px;
            width: 100%;
            cursor: pointer;
            font-size: 12px;
            color: #666;
            display: block;

            &:hover {
              color: #39c5bb;
              background-color: #eee;
            }
          }

          &.active {
            a {
              background-color: #39c5bb;
              color: #333;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

/*transition通用下拉动画 select dataPicker……*/
.slide-toggle-enter-active {
  animation: slideDown 0.3s;
  transform-origin: center top;
}

.slide-toggle-leave-active {
  animation: slideUp 0.3s;
  transform-origin: center top;
}

.top .slide-toggle-enter-active,
.top .slide-toggle-leave-active {
  transform-origin: center bottom;
}

.slide-toggle-top-enter-active {
  animation: slideDown 0.3s;
  transform-origin: center bottom;
}

.slide-toggle-top-leave-active {
  animation: slideUp 0.3s;
  transform-origin: center bottom;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}

@keyframes slideUp {
  0% {
    opacity: 1;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>
