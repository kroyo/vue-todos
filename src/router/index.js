import Vue from 'vue'
import Router from 'vue-router'
import Layouts from '@/components/layouts'
import todo from '@/components/todo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layouts',
      component: Layouts,
      children: [{
        path: '/todo/:id',
        name: 'todo',
        component: todo
      }]
    }
  ]
})
