<!--预警管理-->
<template>
    <div class="early-warning">
        <p>预警管理</p>
    </div>
</template>
<script>
    export default {
        name: 'early-warning',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs')
        },
        data() {
            return {
                // 面包屑
                breadcrumbItems: [
                    {
                        router: '/earlyWarning',
                        label: '预警管理'
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
