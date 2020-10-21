import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Hunting from '@/views/Hunting'
import Talk from '@/views/Talk'
import Academy from '@/views/Academy'
import Clients from '@/views/Clients'


Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'hunting',
            path: '/hunting',
            component: Hunting
        },
        {
            name: 'talk',
            path: '/talk',
            component: Talk
        },
        {
            name: 'academy',
            path: '/academy',
            component: Academy
        },
        {
            name: 'clients',
            path: '/clients',
            component: Clients
        }
    ]
});