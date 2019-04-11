import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import TermsAndConditions from './views/TermsAndConditions.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/terms-and-conditions',
      name: 'terms',
      component: TermsAndConditions
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: PrivacyPolicy
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
