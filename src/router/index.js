import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import('@/views/Content.vue'),
    children: [
      {
        path: 'listimg/:type',
        name: 'ListImg',
        component: () => import('@/views/Content/List_img.vue')
      }
      ,{
      path: 'msg/:id',
      name: 'contentmsg',
      component: () => import('@/views/Content/Msg.vue')
    }]
  },
  {
      path: '*',
      redirect: (to) => {
          return '/'
      }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL, 
  routes
})

export default router
