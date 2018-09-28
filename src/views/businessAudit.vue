<!--操作日志审计-->
<template>
    <div class="business-audit">
        <p>操作日志审计</p>
        <bread-crumb :breadcrumbList="breadcrumbs"></bread-crumb>
    </div>
</template>
<script>
    export default {
        name: 'business-audit',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs')
        },
        data() {
            return {
                // 面包屑
                breadcrumbs: [
                    {
                        router: '/businessAudit',
                        label: '操作日志审计'
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
