<template>
  <div class="list-item editingClass editing" :class="{ 'checked' : item.checked }" v-show="!item.isDelete">
    <label class="checkbox"> <!--自定义的多选框-->
      <input type="checkbox" v-model="item.checked"> <!--item.checked-->
      <span class="checkbox-custom"></span>
    </label>
    <input type="text" v-model="item.text" placeholder='写点什么。。。' :disabled="item.checked || locked">  <!--绑定item.text-->
    <a class="delete-item"> <!--删除图标-->
      <span class="icon-trash"></span>
    </a>
  </div> 
</template>
<script>
export default {
  props: {
    item : {
      type : Object,
      default: () => {
        return {
          checked : false,
          text : '你好,世界'
        };
      }
    },
    'index':{},
    'id':{},
    'init':{},
    'locked':{}
  },
  methods: {
    onChange() {
      editRecord({ id : this.id ,record : this.item , index : this.index }).then(data => {
        this.init();
      });
    }
  }
}
</script>
<style lang="less">
@import '../common/style/list-items.less';
</style>
