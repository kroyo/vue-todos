<template>
  <div class="list-todos">
    <a class="list-todo list" :class="{ 'active': item.id == todoId }" @click="goList(item.id)" v-for="(item,index) in items" :key="index">
      <span class="icon-lock" v-if="item.locked"></span>
      <span class="count-list" v-if="item.count > 0">{{ item.count }}</span>
      {{ item.title }}
    </a>
    <a class="link-list-new" @click="addTodoList">
      <span class="icon-plus"></span>
      新增
    </a>
  </div> 
</template>
<script>
import { getTodoList,addTodo } from '../api/api';  // 引入我们 封装好的两个接口函数。
export default { 
  data() {
    return {
      items: [],   // 菜单数据
      todoId: ''  // 默认选中id
    }
  },
  created() {
    getTodoList({}).then(res => {
      const Todos = res.data.todos;
      this.items = Todos;
      this.todoId = Todos[0].id;
    });
  },
  watch: {
    'todoId'(id) {
      this.$router.push({ name:'todo',params: { id: id } })
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
          const Todos = res.data.todos;
          this.todoId = Todos[Todos.length - 1].id;
          this.items = Todos;
        });
      });
    }
  }
};   
</script>
<style lang="less">
@import '../common/style/menu.less';    
</style>