// import Vue from 'vue'
import App from './App.vue'
// import weex from 'weex-vue-render'
// weex.init(Vue)

import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import * as filters from './config/filters'
import * as globals from './config/globals'
import mixins from './config/mixins'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});
Object.keys(globals).forEach(key => {
    Vue.component(key, globals[key])
});
// register global mixins.
Vue.mixin(mixins)

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({el: '#root', router, store}, App))

router.push('/')
