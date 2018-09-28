<template>
    <div id="app">
        <!--左侧菜单-->
        <demo-menu-list></demo-menu-list>
        <!--角色权限-->
        <extent-competence></extent-competence>
        <!--vue视图-->
        <div class="routerView">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
// import BreadCrumb from '../components/commont/breadCrumbs.vue'
// console.log(BreadCrumb)
export default {
    name: 'app',
    components: {
        BreadCrumb: () => import('@/components/commont/breadCrumbs'),
        DemoMenuList: () => import('@/components/commont/menuList'),
        ExtentCompetence: () => import('@/components/commont/extentCompetence')
    },
    data() {
        return {};
    }
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
