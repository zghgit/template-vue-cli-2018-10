/**
 * Created by Guo Hua on 2018/9/27.
 */
// 分析工具--子路由
const analysisToolRouter = {
    path: "/analysisTool",
    name: "AnalysisTool",
    label: "分析工具",
    component: function(resolve) {
        require(["@/router/analysisTool/index.vue"], resolve);
    },
    children: [
        {
            path: "/securities",
            name: "Securities",
            label: "证券运行监测",
            component: function(resolve) {
                require([
                    "@/components/analysisToolVUE/securities.vue"
                ], resolve);
            }
        },
        {
            path: "/classified",
            name: "Classified",
            label: "分类投资者监测",
            component: function(resolve) {
                require([
                    "@/components/analysisToolVUE/classified.vue"
                ], resolve);
            }
        },
        {
            path: "/abnormal",
            name: "Abnormal",
            label: "异常波动监测",
            component: function(resolve) {
                require(["@/components/analysisToolVUE/abnormal.vue"], resolve);
            }
        },
        {
            path: "/monitoring  ",
            name: "Monitoring",
            label: "异常交易统计监测",
            component: function(resolve) {
                require([
                    "@/components/analysisToolVUE/monitoring.vue"
                ], resolve);
            }
        },
        {
            path: "/special",
            name: "Special",
            label: "专项监测工作",
            component: function(resolve) {
                require(["@/components/analysisToolVUE/special.vue"], resolve);
            }
        },
        {
            path: "/market",
            name: "Market",
            label: "市场维稳监控",
            component: function(resolve) {
                require(["@/components/analysisToolVUE/market.vue"], resolve);
            }
        }
    ]
};

export default analysisToolRouter;
