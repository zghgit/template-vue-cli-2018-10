<template>
    <div>9yujhjjkjk
        <el-row>
            <el-col>
                <p>胜多负少士大夫</p>
                <el-button type="danger">危险按钮aaa</el-button>
                <i class="el-icon-edit"></i>
                <i class="el-icon-share"></i>
                <i class="el-icon-delete"></i>
                <el-button type="primary" icon="el-icon-search">搜索11</el-button>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    /* eslint-disable indent,linebreak-style,space-before-blocks,semi */
export default {
  name: 'HelloWorld',
  props: [],
//  components: [breadcrumb],
  data(){
      return {
// 面包屑1
//          breadcrumbItems: [
//              {
//                  router: '/HelloWorld',   // List_test10
//                  label: '设置列表(T)'
//              }
//          ]
      }
    }
};
</script>

<style lang="less">
    @import '../assets/style/config.less';  // 引入全局样式

    p {
        font-size: @g-fontSize;
        width: 500px;
        background-color: @g-color;
    }
</style>
