<template>
  <div class="list-item editingClass editing">
    <label class="checkbox">
      <input type="checkbox">
      <span class="checkbox-custom"></span>
    </label>
    <input type="text" placeholder="写点什么。。。">
    <a class="delete-item">
      <span class="icon-trash"></span>
    </a>
  </div> 
</template>

<script>
export default {
  
}
</script>

<style lang="less">
@import '../common/style/list-items.less';
</style>
