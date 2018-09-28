// 预警监控--子路由
const alarmMonitorRouter = {
    path: '/alarmMonitor',
    name: 'alarmMonitor',
    component: function(resolve) {
        require(['@/router/alarmMonitor/index.vue'], resolve);
    },
    children: [
        {
            path: '/listData',
            name: 'listData',
            component: function(resolve) {
                require(['@/components/alarmMonitorVUE/listData.vue'], resolve);
            }
        },
        {
            path: '/buttonColor',
            name: 'buttonColor',
            component: function(resolve) {
                require(['@/components/alarmMonitorVUE/buttonColoer.vue'], resolve);
            }
        },
        {
            path: '/selectList',
            name: 'selectList',
            component: function(resolve) {
                require(['@/components/alarmMonitorVUE/selectList.vue'], resolve);
            }
        }
    ]
};
export default alarmMonitorRouter;
