<template>
    <div class="directives-demo">
        <a :href="url" :click="doSomething">A 标签跳转页面</a>

        <p>原始信息: {{message}}</p>
        <p>计算了消息: {{reversedMessage}}</p>

        <h1>Class 与 Style 绑定</h1>
        <div :class="{ active: isActive }">以动态地切换 class</div>
        <div class="static"
            :class="{ active: isActives, 'text-danger': hasError }">
            你可以在对象中传入更多属性来动态切换多个 class。此外，v-bind:class 指令也可以与普通的 class 属性共存.
        </div>
        <div :class="classObject">
            当 isActive 或者 hasError 变化时，class 列表将相应地更新。例如，如果 hasError 的值为 true，class 列表将变为 "static active text-danger"。

            绑定的数据对象不必内联定义在模板里：
        </div>
        <div :class="classObjecta">
            渲染的结果和上面一样。我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：
        </div>
        <div :class="[activeClass, errorClass]">
            我们可以把一个数组传给 v-bind:class，以应用一个 class 列表：
        </div>
        <div :class="[isActiveb ? activeClassb : '', errorClassb]">
            ????? 根据条件切换列表中的 class，可以用三元表达式：
        </div>
        <div :class="[{ active: isActivef }, errorClass]">
            当有多个条件 class 时这样写有些繁琐。所以在数组语法中也可以使用对象语法：
        </div>

        <h1>绑定内联样式</h1>
        <p :style="{ height: newHeight + 'px'}">内联高度样式</p>
        <div :style="styleObject">直接绑定到一个样式对象通常更好，这会让模板更清晰</div>
        <div :style="[baseStyles, overridingStyles]">
            v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上：
        </div>


        <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">绑定内联样式</div>
        <div :style="{ color: 'bule', fontSize: 10 + 'px' }">绑定内联样式</div>
        <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
            从 2.3.0 起你可以为 style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值
        </div>

        <el-input v-model="cardType" @change="handleCreditChange"></el-input>
        <p v-html="htmlText"></p>
        <p>{{demoFullName}}</p>
    </div>
</template>
<script>
/* eslint-disable no-multi-spaces */
import MixinVue from "./Mixin";
export default {
  name: "directives-demo",
  // 父传子！
  props: {
    // status: {
    //    type: String,
    //    required: true,
    //    validator: function(value) {
    //        return [
    //                'syncing',
    //                'synced',
    //                'version-conflict',
    //                'error'
    //            ].indexOf(value) !== -1;
    //    }
    // }
  },
  // 注册组件
  // 单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
  components: {
    BreadCrumb: () => import("@/components/commont/breadCrumbs")
  },
  // 混入, 是一个类的继承，类似于一个公共的方法。
  mixins: [MixinVue],
  // 存储数据
  data() {
    return {
      url: "https://cn.vuejs.org/v2/guide/syntax.html#%E6%96%87%E6%9C%AC",
      message: "Hello",
      cardType: "ALL",
      isActive: true,
      isActives: true,
      hasError: true,
      isActivea: true,
      error: null,
      classObject: {
        active: true,
        "text-danger": true
      },
      activeClass: "active",
      errorClass: "text-danger",
      isActiveb: false,
      activeClassb: "isActiveb33",
      errorClassb: "text-dangebbb",
      isActivef: false,
      newHeight: 30,
      activeColor: "red",
      fontSize: 20,
      styleObject: {
        color: "blue",
        fontSize: "13px"
      },
      baseStyles: {
        color: "green",
        fontSize: "16px"
      },
      overridingStyles: {
        height: "40px"
      },
      aa: 11,
      htmlText: "4532324",
      demoFullName: "Foo Bar",
      full: "Foo",
      last: "Bar"
    };
  },
  // 计算属性
  computed: {
    // 计算属性和侦听器
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse("")
        .join("(~.~)");
    },
    classObjecta() {
      return {
        activea: this.isActivea && !this.error,
        "text-dangera": this.error && this.error.type === "fatal"
      };
    }
    //            newHeight() {
    //                return this.height ?  Number(this.height) - 8 : this.height;
    //            }
  },
  watch: {
    //            full(val) {
    //                this.demoFullName = val + '11' + this.last;
    //            },
    //            last(val) {
    //                this.demoFullName = this.full + '22' + val;
    //            }
    demoFullName() {
      //                return this.full + '1111' + this.last;
    }
  },
  //  数据交互
  methods: {
    // 私有属性名,我们推荐把这两个前缀结合为 $_，作为一个用户定义的私有属性的约定，以确保不会和 Vue 自身相冲突。
    $_myGreatMixin_update: function() {
      // ...
    },
    doSomething: function() {},
    handleCreditChange(val) {
      this.cardType = this.getForm(val);
      console.log(this.showTable);
    }
  },
  // 在一个实例被创建之后执行代码
  created() {
    console.log(this.aa);
  },
  // 初始化数据
  mounted() {
    // this.handleCreditChange();
  },
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
// .directives-demo {
// }

// @import url("../../assets/style/common.less");
// @import url("../../assets/style/icon.less");
</style>
