<!--工作统计-->
<template>
    <div class="sensation">
        <p>工作统计</p>
        <bread-crumb :breadcrumbList="breadcrumbItems"></bread-crumb>

    </div>
</template>
<script>
    export default {
        name: 'sensation',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs')
        },
        data() {
            return {
                // 面包屑
                breadcrumbItems: [
                    {
                        router: '/sensation',
                        label: '工作统计'
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
