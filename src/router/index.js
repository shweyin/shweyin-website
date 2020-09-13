import Vue from 'vue'
import VueRouter from 'vue-router'
import History from '../views/History.vue'
import Projects from '../views/Projects.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Covid from '../views/Covid.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/history',
    name: 'History',
    component: History
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/covid',
    name: 'Covid',
    component: Covid
  }
]

const router = new VueRouter({
  routes
})

export default router
