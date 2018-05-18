<template>
    <div class="list-todos">
        <div>
            <a @click="goList(item.id)" class="list-todo activeListClass list" :class="{'active': item.id === todoId}" v-for="item in items">
                <span class="icon-lock" v-if="item.locked"></span>
                <span class="count-list" v-if="item.count > 0">{{ item.count }}</span>
                {{ item.title }}
            </a>
        </div> 
        <a class="link-list-new" @click="addTodoList()">
            <span class="icon-plus"></span>
            新增
        </a>
    </div>
</template>
<script>
import { getTodoList, addTodo } from '../api/api';
export default {
    data() {
        return {
            items: [],   // 菜单数据
            todoId: ''  // 默认选中id
        }
    },
    created() {
        //调用请求菜单列表数据的接口
        getTodoList({}).then(res => {
            const TODOS = res.data.todos; // 数据都会返回在res.data里面
            this.items = TODOS; // 我的把菜单数据赋值给定义的this.items
            this.todoId = TODOS[0].id; // 把菜单数据的默认的第一个对象的id赋值给默认选中的id
            console.log(res.data.todos);
        });
    },
    watch: {
        'todoId'(id) {
            //监听到用户的点击todoId的变化在跳转路由
            this.$router.push({
                name: 'todo',
                params: { id: id }
            });
        }
    },
    methods: {
        goList(id) {
            this.todoId = id;
        },
        addTodoList() {
            // 调用新增菜单的接口，在接口调用成功在请求数据
            addTodo({}).then(data => {
                getTodoList({}).then(res => {
                    const TODOS = res.data.todos;
                    this.todoId = TODOS[TODOS.length - 1].id;
                    this.items = TODOS;
                });
            });
        }
    }
};
</script>
<style lang="less">
@import '../common/style/menu.less';
</style>