// 第一步: src/config/dev.js   配置 -- api: 'http://localhost:8080'
// 第二步：src/helper/axios.js 判断--  baseURL: url || config.server.api,（当前url地址，不是就替换配置的URL地址）
// 第三步：src/mock/index.js   这里是请求的模拟数据（模拟后端数据）
// 第四步：src/assets/js/alarmMonitorAPI.js   这里是当前页面的借口
// 第五步：src/views/alarmMonitor.vue         这里是vue页面获取请求数据

// 这里是第一步设置URL的路径 当前默认路径地址
const config = {
    server: {
        api: 'http://localhost:8001'   // url 全局请求借口
    }
};

export default config;
