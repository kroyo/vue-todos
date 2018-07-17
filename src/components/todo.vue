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
        <span class="count-list" v-if="todo.count > 0">{{ todo.count }}</span>
      </h1>
      <div class="nav-group right">
        <div class="options-web">
          <a class="nav-item">
            <span class="icon-lock" v-if="todo.locked"></span>
            <span class="icon-unlock" v-else></span>
          </a>
          <a class="nav-item"> <!-- 删除图标 -->
            <span class="icon-trash"></span>
          </a>
        </div>
      </div>
      <div class=" form todo-new input-symbol"> <!-- 新增单个代办单项输入框,监听了回车事件，双向绑定text值,监听了disabled属性，在todo.locked为true的情况下无法编辑-->
        <input type="text" v-model="text" placeholder='请输入' @keyup.enter="onAdd" :disabled="todo.locked" />
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <div v-for="(item,key) in items" :key="key">
        <item :item="item"></item>
      </div>
    </div>
  </div>
</template>
<script>
  import { getRecordList , addRecord } from '../api/api';
  import item from './todo-item';
  export default { 
    components: {
      item
    },
    data() {
      return {
        todo: {
          title: '',
          count: 0,
          locked: false
        },
        items: [],
        text: ''
      }
    },
    // created() 与 watch 冲突
    created() {
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
        let thisid = this.$route.params.id;
        // console.log(thisid);
        getRecordList({ 'id' : thisid }).then(res => {
          let { id , title , count , isDelete , locked , record } = res.data.todo;
          // 请求成功，拿到res.data.todo;在将record 赋值到代办单项列表，其它数据赋值到todo对象
          this.items = record;
          this.todo = {
            id : id,
            title : title,
            count : count ,
            locked : locked,
            isDelete : isDelete
          };
        });
      },
      onAdd() {
        const thisId = this.$route.params.id;
        addRecord({ id : thisId , text : this.text }).then(res => {
          //请求成功后初始化
          this.text = '';
          this.init();
        });
      }
    }
  };
</script>
<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>
