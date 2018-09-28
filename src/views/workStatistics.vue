<!--系统管理-模块管理-->
<template>
    <div class="work-statistics">
        <p>系统管理-模块管理</p>
        <bread-crumb :breadcrumbList="breadcrumbItems"></bread-crumb>

    </div>
</template>
<script>
    export default {
        name: 'work-statistics',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs')
        },
        data() {
            return {
                // 面包屑
                breadcrumbItems: [
                    {
                        router: '/work-statistics',
                        label: '系统管理-模块管理'
                    }
                ]
            };
        }
    };
</script>
<style lang="less">
    @import '../assets/style/config.less';  // 引入全局样式
    .vue-app-start{
        p {
            font-size: @g-fontSize;
            width: 500px;
        }
    }
</style>
