<template>
  <div class="class-style">
<div :style="{width:sideWidth + 'px'}">行内样式给盒子添加宽度</div>
<div :style="{color: reds}">给字体添加颜色</div>
 <div>
   


   
 </div>
 
 
  </div>
</template>
<script>
export default {
  name: "class-style",
  props: {},
  components: {},
  mixins: [],
  data() {
    return {
      sideWidth: "300",
      reds: "red"
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
// @import url("./assets/style/common.less");
</style>

