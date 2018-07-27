<template>
  <div class="list-todos">
    <a class="list-todo list">
      <span class="icon-lock"></span>
      <span class="count-list"> 6 </span>
      gktter
    </a>
    <a class="link-list-new">
      <span class="icon-plus"></span>
      新增
    </a>
  </div>
</template>

<script>
import { getTodoList,addTodo } from '../api/api';  // 引入封装好的两个接口函数
export default {
  data() {
    return {
      item: [],     // 菜单数据
      todoId: ''   // 默认选中id
    }
  }
}
</script>

<style lang="less">
@import '../common/style/menu.less';
</style>


