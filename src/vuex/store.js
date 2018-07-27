import Vue from 'vue'
import Vuex from  'vuex'
import * as getters from './getters'
import * as actions from './actions'


Vue.use(Vuex)   // 安装 Vuex插件

const state = {
    todoList: [],  // 指我们的待办事项列表数据 
    menuOpen: false // 移动端的时候菜单是否开启
}

// 定义所需的 mutations
const mutations = {
    edittode(state,data) {
        state.todoList = data;
    },
    menuopen(state) { // 定义名为 MENUOPEN函数用作改变menuOpen的值
        state.menuOpen = !state.menuOpen;
    }
}

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})