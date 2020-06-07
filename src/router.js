//路由配置文件
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Login from './pages/login.vue'
import Drama from './pages/drama.vue'
import store from './store/index.js'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/drama',
            component: Drama,
            meta: { needLogin: true }
        }
    ]
})

router.beforeEach(function (to, from, next) {
    // debugger;
    // console.log(to.meta.needLogin)
    // 第一个参数去的路径信息；第二个参数当前路由路径信息
    if (to.meta.needLogin) {
        // 引入store才能使用，访问到vuex的登录状态,三目运算符
        store.state.loginUser.isLoading ? next() : next('/login')
    } else {
        next();
    }

}
)

export default router