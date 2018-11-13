<template>
    <div class="vue-2mode">
        <!--<p :style="{ width: sidebarWidth + '10px' }">样式的属性</p>-->
        <!--指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:) 应该要么都用要么都不用。-->
        <input :value="newTodoText" :placeholder="newTodoInstructions">
        <input @input="onInput" @focus="onFocus">
        <!--<div v-cloak>-->
            <!--{{ message }}-->
        <!--</div>-->
        <!--[v-cloak] {-->
        <!--display: none;-->
        <!--}-->
        <!--没有在 v-if/v-else-if/v-else 中使用 key 谨慎使用-->
        <!--如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 <div> 元素)。-->
        {{ ok ? 'YES' : 'NO' }}
        <p>{{ message.split('').reverse().join(',') }}</p>
        <div :id="'list-' + id">435324534</div>
    </div>
</template>
<script>
/* eslint-disable indent */

// import BreadCrumb from '../components/commont/breadCrumbs.vue'
// console.log(BreadCrumb)
export default {
  name: "vue-2mode",
  // 1.基础组件名 强烈推荐
  //    应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。
  // components/ 例子
  //    |- BaseButton.vue
  //    |- BaseTable.vue
  //    |- BaseIcon.vue
  //
  //    |- AppButton.vue
  //    |- AppTable.vue
  //    |- AppIcon.vue
  //
  //    |- VButton.vue
  //    |- VTable.vue
  //    |- VIcon.vue

  //    单例组件名
  //    只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。
  //    components/ 例子
  //        |- TheHeading.vue
  //        |- TheSidebar.vue

  // 注册组件
  // 单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
  components: {
    BreadCrumb: () => import("@/components/commont/breadCrumbs")
  },

  //    在声明 prop 的时候， 在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。
  //    props: {
  //        greetingText: String
  //    }
  //    <WelcomeMessage greeting-text="hi"/>
  // 父传子！
  props: {
    //        status: {
    //            type: String,
    //            required: true,
    //            validator: function(value) {
    //                return [
    //                        'syncing',
    //                        'synced',
    //                        'version-conflict',
    //                        'error'
    //                    ].indexOf(value) !== -1;
    //            }
    //        }
  },
  // 存储数据
  data() {
    return {
      newTodoInstructions: "",
      newTodoText: "",
      ok: "YES",
      message: "34jdgkdf",
      id: "idName"
    };
  },
  // 初始化数据
  mounted() {},
  // 计算属性
  computed: {},
  //    数据交互
  methods: {
    // 私有属性名,我们推荐把这两个前缀结合为 $_，作为一个用户定义的私有属性的约定，以确保不会和 Vue 自身相冲突。
    $_myGreatMixin_update: function() {
      // ...
    },
    onInput: function() {},
    onFocus: function() {}
  }
  //        生命周期钩子 (按照它们被调用的顺序)
  //        beforeCreate
  //        created
  //        beforeMount
  //        mounted
  //        beforeUpdate
  //        updated
  //        activated
  //        deactivated
  //        beforeDestroy
  //        destroyed
};
</script>

<style lang="less" scoped>
// .vue-2mode {
// }

// @import url("../../assets/style/common.less");
// @import url("../../assets/style/icon.less");
</style>
