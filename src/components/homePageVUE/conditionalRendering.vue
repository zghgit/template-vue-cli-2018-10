<template>
  <div class="conditionalRendering">
<div v-if="iscond">v-if是一个指令，将它添加到一个元素上</div>
 <div @click="ifClick" v-if="iscond2">v-if 指令，点击我切换v-else指令</div>
 <div @click="ifClick2" v-else>这里是v-else指令，点击我切换v-if</div>
  <div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B -- v-else-if
</div>
<div v-else-if="type === 'C'">
  C -- v-else-if
</div>
<div v-else>
  Not A/B/C -- v-else-if
</div>
<div>
  <div></div><!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis">阻止单击事件继续传播</a>
</div>
  
  </div>
</template>
<script>
export default {
  name: "conditional-rendering",
  props: {},
  components: {},
  mixins: [],
  data() {
    return {
      iscond: true,
      iscond2: true,
      type: "C"
    };
  },
  computed: {},
  watch: {},
  methods: {
    ifClick() {
      this.iscond2 = !this.iscond2;
    },
    ifClick2() {
      this.iscond2 = !this.iscond2;
    },
    doThis() {
      console.log(111);
    }
  },
  created() {},
  mounted() {},
  beforeDestroy() {}
};
</script>
<style lang="less" scoped>
</style>


