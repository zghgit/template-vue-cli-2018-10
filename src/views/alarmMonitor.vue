<!--预警监控-->
<template>
    <div class="alarm-monitor">
        <p>预警监控666</p>
        <p>http://www.cnblogs.com/wang-yaz/p/9237981.html</p>
        <bread-crumb :breadcrumbList="breadcrumbs"></bread-crumb>
        <el-button type="primary" @click="btnData">dsafsdfas</el-button>
       <select-data></select-data>
    </div>
</template>
<script>
    /* eslint-disable indent */
    import api from '@/api/alarmMonitorAPI';
//    console.log(api);
    /* eslint-disable standard/object-curly-even-spacing */

    // eslint-disable-next-line no-unused-vars
//    import {exports } from '../mock/index';  // 菜单数据
//    console.log(exports);
    export default {
        name: 'alarm-monitor',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs'),
            SelectData: () => import('@/components/commont/selectOption')
        },
        data() {
            return {
                breadcrumbs: [
                    {
                        router: '/alarmMonitor',
                        label: '预警监控'
                    }
                ],
                exportsData: [],
                pageZum: 1,
                pageSize: 10
            };
        },
        computed: {
            listParams() {
                let params = {
                    pageSize: this.pageSize,
                    pageZum: this.pageZum

                };
                return params;
            }
        },
        mounted() {
//            console.log(this.list())
//            {
//              code: 200,
//              msg: '啊啊啊',
//                data: {
//                    list: [],
//                    total: 200,
//                }
//            }
//            api.list({}).then(())s
        },
        methods: {
         async btnData() {
              const response = await api.list(this.listParams);
               if (response.code === 200) {
                   console.log(response.data);
               }
           }
        }
    };
</script>

<style lang="less">
    @import '../assets/style/config.less';  // 引入全局样式

    p {
        font-size: @g-fontSize;
        width: 500px;
    }
</style>
