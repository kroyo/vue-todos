<template>
    <div class="container">
        <div class="menu">
            <menus></menus>
        </div>
        <div class="content-container">
            <todo></todo>
        </div>
    </div>
</template>

<script>
import menus from './menus';
import todo  from './todo';

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