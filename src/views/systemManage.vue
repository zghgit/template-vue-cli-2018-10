<!--系统管理-->
<template>
    <div class="system-manage">
        <p>分析工具</p>
        <bread-crumb :breadcrumbList="breadcrumbItems"></bread-crumb>

    </div>
</template>
<script>
    export default {
        name: 'system-manage',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs')
        },
        data() {
            return {
                // 面包屑
                breadcrumbItems: [
                    {
                        router: '/systemManage',
                        label: '设置列表(T)'
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
