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
                <span class="count-list">{{ todo.count || 0 }}</span>
            </h1>
            <div class="nav-group right">
                <div class="options-web"> 
                    <a class="nav-item"> 
                        <span class="icon-lock" v-if="todo.locked"></span>
                        <span class="icon-unlock" else></span>
                    </a>
                    <a class="nav-item">
                        <span class="icon-trash"></span>
                    </a>
                </div>    
            </div>
            <div class="form todo-new input-symbol">
                <input type="text" v-model="text" placeholder='请输入' :disabled="todo.locked" />
                <span class="icon-add"></span>
            </div>
        </nav>
        <!-- 列表主体模块 -->
        <div class="content-scrollable list-items">

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            todo: {
                title: '星期一',  // 标题
                count: 12, // 数量
                locked: false // 是否绑定
            },
            items: [ // 代办单项列表

            ],
            text: ''  // 用户输入单项项绑定的输入
        }
    }
}
</script>
<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>