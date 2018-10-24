<!--分析工具-->
<template>
    <div class="analysis-tool">
        <p>分析工具</p>
        <demo-vue-list></demo-vue-list>
        <directives-demo></directives-demo>
    </div>
</template>
<script>
    export default {
        name: 'analysis-tool',
        components: {
//            BreadCrumb: () => import('@/components/commont/breadCrumbs'),
            DemoVueList: () => import('@/components/commont/vue_2mode'),
            DirectivesDemo: () => import('@/components/commont/directivesDemo')
        },
        data() {
            return {
                // 面包屑
                breadcrumbItems: [
                    {
                        router: '/analysisTool',
                        label: '分析工具'
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
