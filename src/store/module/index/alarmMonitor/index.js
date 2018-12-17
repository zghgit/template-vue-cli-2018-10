// 状态
const state = {
    objetState: {
        ovrState: []
    }
};
// 存储数据
const mutations = {
    ovrMut(state, val) {
        state.objetState.ovrState = val;
    }
};
// 取数据
const getters = {
    ovrGetters(state) {
        return state.objetState.ovrState;
    }
};
const actions = {};

export default {
    state,
    mutations,
    getters,
    actions
};
