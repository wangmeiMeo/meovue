import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})