import Vue from "vue";
import Vuex from "vuex";

// 模块
import alarmMonitor from "@/store/module/index/alarmMonitor/index";
// import AlarmMonitor from "../store/module/index/alarmMonitor/index";
console.log(AlarmMonitor);
console.log(333);

Vue.use(Vuex);

const state = {
    count: 0
};
const getters = {};
const mutations = {};
const actions = {};

// 返回 store 实例
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        alarmMonitor
    }
});
