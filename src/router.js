import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import DiscoverZone from './views/DiscoverZone.vue'
import Privacy from './views/Privacy.vue'
import Terms from './views/Terms.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/discover-zone',
      name: 'discoverzone',
      component: DiscoverZone
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/termsofuse',
      name: 'terms',
      component: Terms
    }
  ]
})