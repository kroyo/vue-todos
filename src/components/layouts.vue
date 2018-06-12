<template>
  <div class="container">
    <aside class="menu">
      <menus></menus>
    </aside>
    <article class="content-container">
      <router-view></router-view>
    </article>
  </div>
</template>
<script>
  import menus from './menus';
  import todo from './todo';
  export default { 
    components: {
      menus,
      todo
    }
  };
</script>
<style lang="less">
@import '../common/style/layouts.less';   
</style>