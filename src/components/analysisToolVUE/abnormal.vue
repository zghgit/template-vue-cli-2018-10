<template>
    <div :class="$style.input_in_table">34858293
        <el-button @click="stateClick">state数据存储</el-button>
        <el-button @click="tabsData">dsjfkdsfkadsfdaskfsdk</el-button>
    </div>
</template>

<script>
// import STable from '../commont/STable';
// import InputInTable from '../commont/InputInTable';
export default {
    name: 'abnormal',
    props: {},
    components: {
    //   STable
  },
    mixins: [],
    data() {
      return {
    };
  },
    computed: {},
    methods: {
        tabsData(){
            let resp = [22, 44, 55];
            console.log(resp);
            this.$store.commit('ovrMut', resp)
        },
        stateClick(){
        console.log(22);
            console.log(this.$state.getters.ovrGetters)
        }
    },
    created() {},
    mounted() {
    },
    beforeDestroy() {}
};
</script>
<style lang="less" module>
.input_in_table {
    text-align: center;
}
</style>
