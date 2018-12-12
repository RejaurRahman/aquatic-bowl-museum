import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.filter('pluck', function (value) {
   var lastNameObjects=Object.values(value).sort(function(a,b){
      const flastname=a.name.split(/\s(.+)/)[1];
      const slastname=b.name.split(/\s(.+)/)[1];
        return flastname.localeCompare(slastname);
    })
    return lastNameObjects;
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')