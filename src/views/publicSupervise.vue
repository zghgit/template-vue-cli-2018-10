<!--业务审计-->
<template>
    <div class="public-supervise">
        <p>业务审计</p>
        <bread-crumb :breadcrumbList="breadcrumbItems"></bread-crumb>

    </div>
</template>
<script>
    export default {
        name: 'public-supervise',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs')
        },
        data() {
            return {
                // 面包屑
                breadcrumbItems: [
                    {
                        router: '/publicSupervise',
                        label: '业务审计'
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
