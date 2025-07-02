import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Careers from '@/pages/Careers.vue'
import History from '@/pages/History.vue'
import Services from '@/pages/Services.vue'
import NotFound from '@/pages/NotFound.vue'
import Setting from '@/pages/Setting.vue'
import Collections from '@/components/Collections.vue'
import PriceList from '@/components/PriceList.vue'
import Project from '@/pages/Project.vue'
import Register from '@/pages/Register.vue'
import Users from '@/pages/Users.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/careers', component: Careers},
    { path: '/history', component: History},
    { path: '/services', component: Services},
    { path: '/users', component: Users},
    { path: '/register', component: Register },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/setting', component: Setting,
    
        children:[
            {
                path:'',component:Collections
            },
            {
                path:'pricelist',component:PriceList
            }
    ]},
    { path: '/project', component:Project},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router