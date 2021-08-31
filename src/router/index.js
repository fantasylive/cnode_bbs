import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Article = () => import('views/article/Article')
const Author = () => import('views/article/Author')
const User = () => import('views/user/User')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    components: {
      main: Home
    }
  },
  {
    path: '/article',
    // 路由$router params传值必须通过name来识别
    name: 'article',
    components: {
      main: Article,
      sidebar: Author
    }
  },
  {
    path: '/user',
    components: {
      main: User
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
