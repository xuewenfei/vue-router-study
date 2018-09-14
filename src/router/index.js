import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'
import Item1 from '@/pages/Item1'
import Item2 from '@/pages/Item2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/item1',
      name: 'Item1',
      component: Item1
    },
    {
      path: '/item2',
      name: 'Item2',
      component: Item2
    }
  ]
})
