/**
 * Created by Guo Hua on 2018/9/27.
 */
// 系统管理-模块管理--子路由
const workStatisticsRouter = {
    path: '/workStatistics',
    name: 'workStatistics',
    component: function(resolve) {
        require(['@/router/workStatistics/index.vue'], resolve);
    },
    children: [
        {
            path: '/buttonColor',
            name: 'buttonColor',
            component: function(resolve) {
                require(['@/components/workStatisticsVUE/buttonColoer.vue'], resolve);
            }
        },
        {
            path: '/selectList',
            name: 'selectList',
            component: function(resolve) {
                require(['@/components/workStatisticsVUE/selectList.vue'], resolve);
            }
        }
    ]
};
export default workStatisticsRouter;
