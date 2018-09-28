<!--知识库-->
<template>
    <div class="knowledge-base">
        <p>知识库</p>
        <bread-crumb :breadcrumbList="breadcrumbItems"></bread-crumb>


    </div>
</template>
<script>
    export default {
        name: 'knowledge-base',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs')
        },
        data() {
            return {
                // 面包屑
                breadcrumbItems: [
                    {
                        router: '/knowledgeBase',
                        label: '知识库'
                    }
                ]
            };
        }
    };
</script>
<style lang="less">
    @import '../assets/style/config.less';  // 引入全局样式
    .knowledgeBase{
        p {
            font-size: @g-fontSize;
            width: 500px;
        }
    }
</style>
