import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/tutorials',
      name: 'list',
      component: () => import('../components/ListTutorials')
    },
    {
      path: '/tutorials/:id',
      name: 'details',
      component: () => import('../components/TutorialDetails')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../components/AddTutorial')
    }
  ]

})
