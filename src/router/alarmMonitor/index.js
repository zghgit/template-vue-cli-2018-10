// 预警监控--子路由
const alarmMonitorRouter = {
    path: '/alarmMonitor',
    name: 'alarmMonitor',
    label: '预警监控',
    component: function(resolve) {
        require(['@/router/alarmMonitor/index.vue'], resolve);
    },
    children: [
        {
            path: '/listData',
            name: 'listData',
            label: '列表数据',
            component: function(resolve) {
                require(['@/components/alarmMonitorVUE/listData.vue'], resolve);
            }
        },
        {
            path: '/buttonColor',
            name: 'buttonColor',
            label: '按钮',
            component: function(resolve) {
                require(['@/components/alarmMonitorVUE/buttonColoer.vue'], resolve);
            }
        },
        {
            path: '/selectList',
            name: 'selectList',
            label: '下拉框',
            component: function(resolve) {
                require(['@/components/alarmMonitorVUE/selectList.vue'], resolve);
            }
        }
    ]
};
export default alarmMonitorRouter;
