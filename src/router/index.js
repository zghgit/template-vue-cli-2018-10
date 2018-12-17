import Vue from "vue";
import Router from "vue-router";
// import HomePage from '@/views/homePage';

/**  菜单目录
 * 1、alarmMonitor      预警监控
 * 2、analysisTool      分析工具
 * 3、businessAudit     操作日志审计
 * 4、earlyWarning      预警管理
 * 5、homePage          首页
 * 6、knowledgeBase     知识库
 * 7、marketStability   舆情监测
 * 8、marketSupervise   市场运行监测
 * 9、publicSupervise   业务审计
 * 10、sensation        工作统计
 * 11、superviseTask    监察任务
 * 12、systemManage     系统管理
 * 13、workStatistics   系统管理-模块管理
 **/

import homePageRouterIndexChildren from "./homePage/index";
import AlarmMonitorIndexChildren from "./alarmMonitor/index"; // 预警监控
import AnalysisToolIndexChildren from "./analysisTool/index"; // 分析工具

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "HomePage",
            label: "首页",
            component: function(resolve) {
                require(["@/views/homePage"], resolve);
            }
        },
        {
            path: "/homePage",
            name: "HomePage",
            label: "首页",
            component: function(resolve) {
                require(["@/views/homePage"], resolve);
            }
        },
        homePageRouterIndexChildren,
        {
            path: "/alarmMonitor",
            name: "AlarmMonitor",
            label: "预警监控",
            component: function(resolve) {
                require(["@/views/alarmMonitor"], resolve);
            }
            // children: []
        },
        AlarmMonitorIndexChildren,
        {
            path: "/analysisTool",
            name: "AnalysisTool",
            label: "分析工具",
            component: function(resolve) {
                require(["@/views/analysisTool"], resolve);
            }
        },
        AnalysisToolIndexChildren,
        {
            path: "/businessAudit",
            name: "BusinessAudit",
            label: "操作日志审计",
            component: function(resolve) {
                require(["@/views/businessAudit"], resolve);
            }
        },
        {
            path: "/earlyWarning",
            name: "EarlyWarning",
            label: "预警管理",
            component: function(resolve) {
                require(["@/views/earlyWarning"], resolve);
            }
        },
        {
            path: "/knowledgeBase",
            name: "KnowledgeBase",
            label: "知识库",
            component: function(resolve) {
                require(["@/views/knowledgeBase"], resolve);
            }
        },
        {
            path: "/marketStability",
            name: "MarketStability",
            label: "舆情监测",
            component: function(resolve) {
                require(["@/views/marketStability"], resolve);
            }
        },
        {
            path: "/marketSupervise",
            name: "marketSupervise",
            label: "市场运行监测",
            component: function(resolve) {
                require(["@/views/marketSupervise"], resolve);
            }
        },
        {
            path: "/publicSupervise",
            name: "publicSupervise",
            label: "业务审计",
            component: function(resolve) {
                require(["@/views/publicSupervise"], resolve);
            }
        },
        {
            path: "/sensation",
            name: "Sensation",
            label: "工作统计",
            component: function(resolve) {
                require(["@/views/sensation"], resolve);
            }
        },
        {
            path: "/superviseTask",
            name: "superviseTask",
            label: "监察任务",
            component: function(resolve) {
                require(["@/views/superviseTask"], resolve);
            }
        },
        {
            path: "/systemManage",
            name: "SystemManage",
            label: "系统管理",
            component: function(resolve) {
                require(["@/views/systemManage"], resolve);
            }
        },
        {
            path: "/workStatistics",
            name: "WorkStatistics",
            label: "系统管理-模块管理",
            component: function(resolve) {
                require(["@/views/workStatistics"], resolve);
            }
        }
    ]
});
