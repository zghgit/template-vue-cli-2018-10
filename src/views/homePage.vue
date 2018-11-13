<!--首页-->
<template>
    <div class="home-page">
        <bread-crumb :breadcrumbList="breadcrumbItems"></bread-crumb>
        <el-button type="danger">危险按钮aaa</el-button>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search">百度地图</el-button>
        <div id="container"></div>
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
        <div id="main" style="width: 600px;height:400px;"></div>

    </div>
</template>
<script>
/* eslint-disable no-undef */

export default {
  name: "home-page",
  components: {
    BreadCrumb: () => import("@/components/commont/breadCrumbs"),
    MenuList: () => import("@/components/commont/menuList"),
    ExtentCompetence: () => import("@/components/commont/extentCompetence")
  },
  data() {
    return {
      // 面包屑
      breadcrumbItems: [
        {
          router: "/homePage",
          label: "首页"
        }
      ]
    };
  },
  mounted() {
    this.fn_map();
    this.fn_echarts();
  },
  methods: {
    // 百度地图
    fn_map() {
      /* eslint-disable quotes */
      // eslint-disable-next-line no-undef
      var map = new BMap.Map("container");
      // 创建地图实例
      // eslint-disable-next-line no-undef
      var point = new BMap.Point(116.404, 39.915);
      // 创建点坐标
      map.centerAndZoom(point, 15);
      // 初始化地图，设置中心点坐标和地图级别
    },
    fn_echarts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/config.less"; // 引入全局样式
.home-page {
  width: 100%;
  p {
    font-size: @g-fontSize;
    width: 500px;
  }
}
#container {
  margin: 20px 0;
  height: 300px;
  width: 100%;
}
</style>
