<template>
  <div class="container">
    <aside class="menu">
      <slidebar></slidebar>
    </aside>
    <article class="content-container">
      <mainview></mainview>
    </article>
  </div>
</template>

<script>
import slidebar from './slidebar';
import mainview from './main';
export default {
  components: {
    slidebar,
    mainview
  },
}
</script>

<style lang="less">
@import '../common/style/layouts.less';
</style>


