import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        }
    ]
})