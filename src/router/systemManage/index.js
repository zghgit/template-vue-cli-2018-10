/**
 * Created by Guo Hua on 2018/9/27.
 */
// 系统管理-模块管理--子路由
const systemManageRouter = {
    path: '/systemManage',
    name: 'systemManage',
    component: function(resolve) {
        require(['@/router/systemManage/index.vue'], resolve);
    },
    children: [
        {
            path: '/buttonColor',
            name: 'buttonColor',
            component: function(resolve) {
                require(['@/components/systemManageVUE/buttonColoer.vue'], resolve);
            }
        },
        {
            path: '/selectList',
            name: 'selectList',
            component: function(resolve) {
                require(['@/components/systemManageVUE/selectList.vue'], resolve);
            }
        }
    ]
};

export default systemManageRouter;
