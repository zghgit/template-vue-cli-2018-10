<template>
  <div class="class-style">
    <div :style="{width:sideWidth +  `px`, fontSize: fontSizes + `px`}">行内样式给盒子添加宽度</div>
    <div :style="{color: reds}">给字体添加颜色</div>
    <div :class="{acd:ssdsd}">class绑定</div>
    <div :class="{acd1:ssdsd2, 'asd2': hasEeero}">可以在对象中传、
      入跟多属性来动态切换多个class</div>
    <div :class="classObject">绑定的数据对象不必内联定义在模板里</div>
    <div :class="classObject1">这里绑定一个返回对象的计算属性</div>
    <div :class="[activeClass2, activeClass3]">数组语法，应用一个clss列表</div>
    <div :class="[isactive4 ? `activeClass4` :`error3`, `error3`]">根据条件切换列表中的class，可以使用三元表达式：</div>
    <div :class="[{activeClass5 : isactive5}, `errorClass5`]">在数组语法中也可以使用对象语法</div>

  </div>
</template>
<script>
export default {
  name: "class-style",
  props: {},
  components: {},
  mixins: [],
  data() {
    return {
      sideWidth: "800",
      fontSizes: 30,
      reds: "red",
      ssdsd: true,
      ssdsd2: false,
      hasEeero: true,
      classObject: {
        active: true,
        "text-danger": true
      },
      isActive: true,
      error: null,
      activeClass2: "active2",
      activeClass3: "active3",
      isactive4: true,
      isactive5: false
    };
  },
  computed: {
    classObject1: function() {
      return {
        active1: this.isActive && !this.error,
        "text-danger1": this.error && !this.error.type === "false"
      };
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.error);
  },
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
// @import url("./assets/style/common.less");
.acd,
.acd1 {
  color: aqua;
}
.asd2 {
  color: gold;
}
.active {
  font-size: 20px;
}
.text-danger {
  color: seagreen;
}
.active1 {
  color: salmon;
}
.active2 {
  color: sandybrown;
}
.active3 {
  font-size: 18px;
}
.activeClass4 {
  color: forestgreen;
}
.error3 {
  font-size: 16px;
}
</style>

