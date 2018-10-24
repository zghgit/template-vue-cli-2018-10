<template>
    <div id="app">
        <!--左侧菜单-->
        <demo-menu-list></demo-menu-list>
        <!--<AppSidebar :style="{ width: sidebarWidth + 'px' }">-->
        <!--指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:) 应该要么都用要么都不用。-->
        <!--<input-->
            <!--:value="newTodoText"-->
            <!--:placeholder="newTodoInstructions"-->
        <!--&gt;-->
        <!--<input-->
            <!--@input="onInput"-->
            <!--@focus="onFocus"-->
        <!--&gt;-->

        <!--角色权限-->
        <extent-competence></extent-competence>
        <!--vue视图-->
        <div class="routerView">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    /* eslint-disable indent */

    // import BreadCrumb from '../components/commont/breadCrumbs.vue'
// console.log(BreadCrumb)
export default {
    name: 'app',
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
        BreadCrumb: () => import('@/components/commont/breadCrumbs'),
        DemoMenuList: () => import('@/components/commont/menuList'),
        ExtentCompetence: () => import('@/components/commont/extentCompetence')
    },
    // 混入, 是一个类的继承，类似于一个公共的方法。
    mixins: [],
    // 存储数据
    data() {
        return {};
    },
    // 计算属性
    computed: {},
    watch: {},
//    数据交互  127662
    methods: {
        // 私有属性名,我们推荐把这两个前缀结合为 $_，作为一个用户定义的私有属性的约定，以确保不会和 Vue 自身相冲突。
        $_myGreatMixin_update: function() {
            // ...
        }
    },
    // 在一个实例被创建之后执行代码
    created() {},
    // 初始化数据
    mounted() {},
    beforeDestroy() {}
};
</script>

<style lang="less">
    #app{
        width: 100%;
    }
    .routerView{
        /*width: calc(100% - 200px);*/
        margin: 76px 20px 20px 220px;
        border: 1px solid #f0eded;
        border-radius: 5px;
        padding: 20px;
    }
@import url('./assets/style/common.less');
@import url('./assets/style/icon.less');
</style>
