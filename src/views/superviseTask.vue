<!--监察任务-->
<template>
    <div class="supervise-task">
        <p>监察任务</p>
        <bread-crumb :breadcrumbList="breadcrumbItems"></bread-crumb>

    </div>
</template>
<script>
    export default {
        name: 'supervise-task',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs')
        },
        data() {
            return {
                // 面包屑
                breadcrumbItems: [
                    {
                        router: '/superviseTask',
                        label: '监察任务'
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
