
<!-- 列表数据 -->
<template>
    <div class="list-Data">
        <bread-crumb :breadcrumbList="breadcrumbs"></bread-crumb>
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="活动名称：" prop="name">
                <el-input v-model="ruleForm.name" :size="sizeSmall"></el-input>
            </el-form-item>
            <el-form-item label="活动区域：" prop="region">
                <el-select
                    clearable
                    @change="regionChange"
                    v-model="ruleForm.region"
                    placeholder="请选择活动区域">
                    <el-option
                        v-for="item in regionOpiton"
                        :value="item.value"
                        :key="item.value"
                        :label="item.name">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="开始时间：" requireq prop="startData">
                <el-date-picker
                    type="data"
                    placeholder="选择开始日期"
                    v-model="ruleForm.startData" >
                </el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间：" requireq prop="endData">
                <el-time-picker
                    type="fixed-time"
                    placeholder="选择结束日期"
                    v-model="ruleForm.endData">

                </el-time-picker>
            </el-form-item>
            <el-form-item label="即使配送：" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质：" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox v-for="item in typeList"
                    :label="item.label" :key="item.label">{{item.name}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源：" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio v-for="itme in resourceRadio"
                    :label="itme.key" :key="itme.key">{{itme.name}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式：" prop="desc">
                <el-input v-model="ruleForm.desc" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
                <el-button @click="restForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>5
<script>
    export default {
        name: 'list-Data',
        components: {
            BreadCrumb: () => import('@/components/commont/breadCrumbs')
        },
        computed: {},
        data() {
            return {
              // 面包须
                breadcrumbs: [
                    {
                        router: '/listData',
                        label: '列表数据'
                    }
                ],
                // 表单的大小
                sizeSmall: 'small',
//                查询条件
                ruleForm: {
                    name: '',
                    region: '',
                    startData: '',
                    endData: '',
                    delivery: '',
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                         {required: true, message: '请输入活动名称', trigger: 'blur'}
                    ]
                },
                regionOpiton: [],
                typeList: [
                    {
                        name: '中学',
                        label: '01'
                    },
                    {
                        name: '初中',
                        label: '02'
                    },
                    {
                        name: '高中',
                        label: '03'
                    },
                    {
                        name: '大学',
                        label: '04'
                    }
                ],
                resourceRadio: [
                    {
                        key: 'A',
                        name: '中国'
                    },
                    {
                        key: 'B',
                        name: '美国'
                    },
                    {
                        key: 'C',
                        name: '日本'
                    }
                ]
            };
        },
        mounted() {},
        methods: {
            regionChange() {},
            submitForm(formName) {
                this.$refs[formName].validata((valid) => {
                    if (valid) {
                        console.log(11);
                    } else {
                        console.log(222);
                        return false;
                    }
                });
            },
            restForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    };
</script>
<style lang="less">
    @import '../../assets/style/config.less';  // 引入全局样式

    .list-Data {
        font-size: @g-fontSize;
        width: 500px;
    }
</style>
