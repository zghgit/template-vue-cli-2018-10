/**
 * Created by Guo Hua on 2018/9/18.
 */
// 菜单 moock 数据
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
export const demoMenuList = [
    {
        href: '/homePage',
        menuIcon: 'el-icon-info',
        content: '首页',
        isShow: true
    },
    {
        href: '',
        menuIcon: 'el-icon-success',
        menuDown: 'el-icon-arrow-down',
        activeHide: 'aa',
        content: '预警监控',
        isShow: true,
        submenu: [
            {
                href: '/alarmMonitor',
                content: '预警监控',
                active: 'active'
            },
            {
                href: '/listData',
                content: '列表数据',
                active: 'active'
            },
            {
                href: 'selectList',
                content: '下拉框',
                active: 'active'
            },
            {
                href: 'buttonColor',
                content: '按钮',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-tickets',
        menuDown: 'el-icon-arrow-down',
        activeHide: 'aa',
        content: '分析工具',
        isShow: true,
        submenu: [
            {
                href: '/analysisTool',
                content: '分析工具',
                active: 'active'
            },
            {
                href: '/analysisTool',
                content: '证券运行监测',
                active: 'active'
            },
            {
                href: '/analysisTool',
                content: '分类投资者监测',
                active: 'active'
            },
            {
                href: '',
                content: '异常波动监测',
                active: 'active'
            },
            {
                href: '',
                content: '异常交易统计监测',
                active: 'active'
            },
            {
                href: '',
                content: '专项监测工作',
                active: 'active'
            },
            {
                href: '',
                content: '市场维稳监控',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-news',
        activeHide: 'aa',
        menuDown: 'el-icon-arrow-down',
        content: '操作日志审计',
        isShow: true,
        submenu: [
            {
                ss: false,
                href: '/businessAudit',
                content: '操作日志审计',
                active: 'active'
            },
            {
                ss: false,
                href: '',
                content: '自定义查询',
                active: 'active'
            },
            {
                ss: false,
                href: 'marketSupervise',
                content: '特定分析工具',
                active: 'active'
            },
            {
                ss: false,
                href: 'marketSupervise',
                content: '综合查询',
                active: 'active'
            }, {
                ss: false,
                href: 'marketSupervise',
                content: '报告生成工具',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-location-outline',
        activeHide: 'aa',
        menuDown: 'el-icon-arrow-down',
        content: '预警管理',
        isShow: true,
        submenu: [
            {
                ss: false,
                href: '/earlyWarning',
                content: '预警管理',
                active: 'active'
            },
            {
                ss: false,
                href: '',
                content: '监察任务',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-share',
        activeHide: 'aa',
        menuDown: 'el-icon-arrow-down',
        content: '知识库',
        isShow: true,
        submenu: [
            {
                ss: false,
                href: 'knowledgeBase',
                content: '知识库',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-loading',
        activeHide: 'aa',
        menuDown: 'el-icon-arrow-down',
        content: '舆情监测',
        isShow: true,
        submenu: [
            {
                ss: false,
                href: '/marketStability',
                content: '舆情监测',
                active: 'active'
            },
            {
                ss: false,
                href: 'analysisTool',
                content: '用户管理',
                active: 'active'
            },
            {
                ss: false,
                href: 'analysisTool',
                content: '其他管理',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-upload',
        activeHide: 'aa',
        menuDown: 'el-icon-arrow-down',
        content: '市场运行监测',
        isShow: true,
        submenu: [
            {
                ss: false,
                href: '/marketSupervise',
                content: '市场运行监测',
                active: 'active'
            }, {
                ss: false,
                href: 'superviseTask',
                content: '监控历史库',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-upload',
        activeHide: 'aa',
        menuDown: 'el-icon-arrow-down',
        content: '业务审计',
        isShow: true,
        submenu: [
            {
                ss: false,
                href: '/publicSupervise',
                content: '业务审计',
                active: 'active'
            }, {
                ss: false,
                href: '/',
                content: '监控历史库',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-upload',
        activeHide: 'aa',
        menuDown: 'el-icon-arrow-down',
        content: '工作统计',
        isShow: true,
        submenu: [
            {
                ss: false,
                href: '/sensation',
                content: '异常历史库',
                active: 'active'
            }, {
                ss: false,
                href: 'superviseTask',
                content: '监控历史库',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-upload',
        activeHide: 'aa',
        menuDown: 'el-icon-arrow-down',
        content: '监察任务',
        isShow: true,
        submenu: [
            {
                ss: false,
                href: '/superviseTask',
                content: '监察任务',
                active: 'active'
            }, {
                ss: false,
                href: 'superviseTask',
                content: '监控历史库',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-upload',
        activeHide: 'aa',
        menuDown: 'el-icon-arrow-down',
        content: '系统管理',
        isShow: true,
        submenu: [
            {
                ss: false,
                href: '/systemManage',
                content: '系统管理',
                active: 'active'
            }, {
                ss: false,
                href: 'superviseTask',
                content: '监控历史库',
                active: 'active'
            }
        ]
    },
    {
        href: '',
        menuIcon: 'el-icon-upload',
        activeHide: 'aa',
        menuDown: 'el-icon-arrow-down',
        content: '系统管理-模块管理',
        isShow: true,
        submenu: [
            {
                ss: false,
                href: '/workStatistics',
                content: '系统管理-模块管理',
                active: 'active'
            }, {
                ss: false,
                href: 'superviseTask',
                content: '监控历史库',
                active: 'active'
            }
        ]
    }
];
