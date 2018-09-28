<!--分析工具-->
<template>
    <div class="analysis-tool">
        <p>分析工具</p>
        <!--<p>证券基础知识介绍</p>-->
        <!--上交所和证券所-->
  <!--监督管理机构-->
        <!--（证监会、行业协会、信息技术委员会）-->
        <!--技术实现机构-->
        <!--（交易所、通信公司）-->
        <!--发行市场（一级市场）或交易市场（初级市场）-->
        <!--会员-->
        <!--开发商-->

        <!--品种结构&#45;&#45;股票和债券-->
        <!--个人投资者和机构投资者-->


        <!--a股是-->
        <!--指数：-->













    </div>
</template>
<script>
    export default {
        name: 'analysis-tool',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs')
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
