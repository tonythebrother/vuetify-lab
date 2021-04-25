import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/LoginForm.vue'
import Home from '../components/Home.vue'
Vue.use(VueRouter)

const routes = [
    {path: '/', component: Login, props: true},
    {path: '/home', component: Home}
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
