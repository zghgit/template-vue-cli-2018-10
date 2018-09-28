<!--按钮-->
<template>
    <div class="select-option">
        <el-select v-model="selectData" placeholder="请选择">
            <el-option
                v-for="item in optionData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
<script>
    export default {
        name: 'select-option',
        components: {},
        computed: {},
        data() {
            return {
                selectData: 'ALL',
                optionData: [
                    {
                        value: 'ALL',
                        label: '全部'
                    },
                    {
                        value: 'A',
                        label: '上交所'
                    }
                ]
            };
        },
        mounted() {},
        methods: {}
    };
</script>
<style lang="less">
    @import '../../assets/style/config.less';  // 引入全局样式

    .select-option {
        font-size: @g-fontSize;
        width: 500px;
    }
</style>
