<template>
  <div class="page lists-show">
    <nav>
      <div class="nav-group">
        <a class="nav-item">
          <span class="icon-list-unordered"></span>
        </a>
      </div>
      <h1 class="title-page">
        <span class="title-wrapper">gktter</span>
        <span class="count-list"> 6 </span>
      </h1>
      <div class="nav-group right">
        <div class="options-web">
          <a class="nav-item">
            <span class="icon-lock"></span>
            <span class="icon-unlock"></span>
          </a>
          <a class="nav-item">
            <span class="icon-trash"></span>
          </a>
        </div>
      </div>
      <div class=" form todo-new input-symbol"> <!-- 新增单个代办单项输入框,监听了回车事件，双向绑定text值,监听了disabled属性，在todo.locked为true的情况下无法编辑-->
        <input type="text" placeholder='请输入' />
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <div>
        <item></item>
      </div>
    </div>
  </div>
</template>

<script>
import item from './main-item';
export default {
  components: {
    item
  }    
}
</script>

<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>
