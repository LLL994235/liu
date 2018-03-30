import Vue from 'vue'
import App from './App.vue'
import VUEresource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VUEresource)
new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.filter('length',(e)=>{
	if(e.length>=22){
		return e=e.substring(0,19)+'...'
	}
	return e
})
