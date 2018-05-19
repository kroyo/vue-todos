<template>
    <div class="page lists-show">
        <nav>
            <div class="nav-group">
                <a class="nav-item">
                    <span class="icon-list-unordered"></span>
                </a>
            </div>
            <h1 class="title-page">
                <span class="title-wrapper">{{ todo.title }}</span>
                <span class="count-list">{{ todo.count || 0 }}</span>
            </h1>
            <div class="nav-group right">
                <div class="options-web"> 
                    <a class="nav-item"> 
                        <span class="icon-lock" v-if="todo.locked"></span>
                        <span class="icon-unlock" v-else></span>
                    </a>
                    <a class="nav-item">
                        <span class="icon-trash"></span>
                    </a>
                </div>    
            </div>
            <div class="form todo-new input-symbol">
                <input type="text" v-model="text" placeholder='请输入' :disabled="todo.locked" />
                <span class="icon-add"></span>
            </div>
        </nav>
        <!-- 列表主体模块 -->
        <div class="content-scrollable list-items">
            <div v-for="(item,index) in items">
                <item :item="item" :index="index" :id="todo.id" :init="init" :locked="todo.locked"></item>
            </div>
        </div>
    </div>
</template>
<script>
import item from './item';
import { getListId,addRecord } from '../api/api';

export default {
    components: {
        item
    },
    data() {
        return {
            todo: {
                title: '星期一',  // 标题
                count: 12, // 数量
                locked: false // 是否绑定
            },
            items: [],  // 代办单项列表
            text: ''  // 用户输入单项项绑定的输入 
        }
    },
    created() {
        // created生命周期，在实例已经创建完成，页面还没渲染时调用init方法。
        this.init();
    },
    watch: {
        '$route.params.id'() {
            // 监听$route.params.id的变化，如果这个id即代表用户点击了其他的待办项需要重新请求数据。
            this.init();
        }
    },
    methods: {
        init() {
            // 获取到 $route下params下的id,即我们在menus.vue组件处传入的数据。
            let Id = this.$route.params.id;
            getListId({ id: Id }).then(res => {
                let { todoid, title, count, isDelete, locked, record } = res.data.todo;
                // 请求成功，拿到res.data.todo;在将record 赋值到代办单项列表，其它数据赋值到todo对象
                this.items = record;
                this.todo = {
                    id: todoid,
                    title: title,
                    count: count,
                    locked: locked,
                    isDelete: isDelete
                };
            });
        }
    }
}
</script>
<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>