/**
 * Created by Guo Hua on 2018/9/27.
 */
// 首页子页面
const homePageRouter = {
    path: '/homePage',
    name: '首页',
    component: function (resolve) {
        require(['@/router/homePage/index.vue'], resolve)
    },
    children: [{
            path: '/classStyle',
            name: '样式绑定',
            component: function (resolve) {
                require(['@/components/homePageVUE/classStyle.vue'], resolve)
            }
        },
        // {
        //     path: '',
        //     name: '',
        //     component: function () {}
        // },
        // {
        //     paht: '',
        //     name: '',
        //     component: function () {}
        // }
    ]
};

export default homePageRouter;
