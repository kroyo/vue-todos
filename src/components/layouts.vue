<template>
  <div class="container" :class="{ 'menu-open' : menuOpen }">
    <aside class="menu">
      <menus></menus>
    </aside>
    <div class="content-overlay" @click="$store.dispatch('updateMenu')"></div>
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
    },
    computed: {
      menuOpen() {
        return this.$store.state.menuOpen;
      }
    }
  };
</script>
<style lang="less">
@import '../common/style/layouts.less';   
</style>