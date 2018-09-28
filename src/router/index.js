import Vue from 'vue';
import Router from 'vue-router';
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
 // * 13、workStatistics   系统管理-模块管理
 **/
import AlarmMonitorIndexChildren from './alarmMonitor/index'; // 预警监控

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: function(resolve) {
                require(['@/views/homePage'], resolve);   // 首页
            }
        },
        {
            path: '/homePage',
            name: 'HomePage',
            component: function(resolve) {
                require(['@/views/homePage'], resolve);   // 首页
            }
        },
        {
            path: '/alarmMonitor',
            name: 'AlarmMonitor',
            component: function(resolve) {
                require(['@/views/alarmMonitor'], resolve);   // 预警监控
            }
            // children: []
        },
        AlarmMonitorIndexChildren,
        {
            path: '/analysisTool',
            name: 'AnalysisTool',
            component: function(resolve) {
                require(['@/views/analysisTool'], resolve);    // 分析工具
            }
        },
        {
            path: '/businessAudit',
            name: 'BusinessAudit',
            component: function(resolve) {
                require(['@/views/businessAudit'], resolve);   // 操作日志审计
            }
        },
        {
            path: '/earlyWarning',
            name: 'EarlyWarning',
            component: function(resolve) {
                require(['@/views/earlyWarning'], resolve);   // 预警管理
            }
        },
        {
            path: '/knowledgeBase',
            name: 'KnowledgeBase',
            component: function(resolve) {
                require(['@/views/knowledgeBase'], resolve);  // 知识库
            }
        },
        {
            path: '/marketStability',
            name: 'MarketStability',
            component: function(resolve) {
                require(['@/views/marketStability'], resolve);  // 舆情监测
            }
        },
        {
            path: '/marketSupervise',
            name: 'marketSupervise',
            component: function(resolve) {
                require(['@/views/marketSupervise'], resolve);  // 市场运行监测
            }
        },
        {
            path: '/publicSupervise',
            name: 'publicSupervise',
            component: function(resolve) {
                require(['@/views/publicSupervise'], resolve);  // 业务审计
            }
        },
        {
            path: '/sensation',
            name: 'Sensation',
            component: function(resolve) {
                require(['@/views/sensation'], resolve);   // 工作统计
            }
        },
        {
            path: '/superviseTask',
            name: 'superviseTask',
            component: function(resolve) {
                require(['@/views/superviseTask'], resolve);   // 监察任务
            }
        },
        {
            path: '/systemManage',
            name: 'SystemManage',
            component: function(resolve) {
                require(['@/views/systemManage'], resolve);   // 系统管理
            }
        },
        {
            path: '/workStatistics',
            name: 'WorkStatistics',
            component: function(resolve) {
                require(['@/views/workStatistics'], resolve);   // 系统管理-模块管理
            }
        }
    ]
});
