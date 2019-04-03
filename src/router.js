import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import VueCarousel from 'vue-carousel'
import Meta from 'vue-meta'
import Home from './views/Home.vue'
import About from './views/About.vue'
import DiscoverZone from './views/DiscoverZone.vue'
import AnimalProfile from './views/AnimalProfile.vue'
import Privacy from './views/Privacy.vue'
import Terms from './views/Terms.vue'

Vue.use(VueFullPage)
Vue.use(Router)
Vue.use(Meta)
Vue.use(VueScrollTo)
Vue.use(VueCarousel)

export default new Router({
  mode: 'history',
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
      path: '/animalprofile',
      name: 'animalprofile',
      component: AnimalProfile
    },
    {
      path: '/animalprofile/:animal-name',
      name: 'animalprofile',
      component: AnimalProfile
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
    },
    {
      path: '*', 
      redirect: '/'
    }
  ]
})