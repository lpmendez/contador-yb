import Vue from 'vue'
import App from './App.vue'

import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import {routes} from './routes'
import firebase from 'firebase';

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false

let app;

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) =>{
  let currentUser = firebase.auth().currentUser;
  let reqAuth = to.matched.some(record=> record.meta.requiresAuth);

  if(reqAuth && !currentUser) next('/login')
  else next()
})

firebase.auth().onAuthStateChanged(function(){
  if(!app){
    
    app = new Vue({
      render: h => h(App),
      router
    }).$mount('#app')
  }
});
