<template>
    <div class="page lists-show">
        <nav>
            <div class="nav-group">
                <a class="nav-item">
                    <span class="icon-list-unordered"></span>
                </a>
            </div>
            <h1 class="title-page">
                <span class="title-wrapper">kroyo</span>
                <span class="count-list">3</span>
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
        </nav>
        <div class=" form todo-new input-symbol">
            <input type="text" placeholder='请输入' />
            <span class="icon-add"></span>
        </div>
        <div class="content-scrollable list-items">

        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>