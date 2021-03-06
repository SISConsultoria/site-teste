import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Hunting from '@/views/Hunting'
import Talk from '@/views/Talk'
import Academy from '@/views/Academy'
import Clients from '@/views/Clients'
import Vacancy from '@/views/Vacancy'
import Transformation from '@/views/Transformation'
import Consulting from '@/views/Consulting'
import Development from '@/views/Development'
import AgileCoaching from '@/views/AgileCoaching'
import SuccessCases from '@/views/SuccessCases'
import AgileCells from '@/views/AgileCells'
import DevOps from '@/views/DevOps'
import Apprenticeship from '@/views/Apprenticeship'
import Cloud from '@/views/Cloud'
import Strategic from '@/views/Strategic'
import Sustentation from '@/views/Sustentation'
import Erp from '@/views/Erp'
import Quality from '@/views/Quality'
import Design from '@/views/Design'
import Ux from '@/views/Ux'
import LowCode from '@/views/LowCode'
import InovaSIS from '@/views/InovaSIS'





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
        },
        {
            name: 'transformation',
            path: '/transformation',
            component: Transformation
        },
        {
            name: 'consulting',
            path: '/consulting',
            component: Consulting
        },
        {
            name: 'development',
            path: '/development',
            component: Development
        },
        {
            name: 'agileCoaching',
            path: '/agileCoaching',
            component: AgileCoaching
        },
        {            
            name: 'successCases',
            path: '/successCases',
            component: SuccessCases
        },
        {            
            name: 'agileCells',
            path: '/agileCells',
            component: AgileCells
        },
        {            
            name: 'devOps',
            path: '/devOps',
            component: DevOps
        },
        {            
            name: 'vacancy',
            path: '/vacancy',
            component: Vacancy
        },        
        {
            name: 'apprenticeship',
            path: '/apprenticeship',
            component: Apprenticeship
        },        
        {
            name: 'cloud',
            path: '/cloud',
            component: Cloud
        },        
        {
            name: 'strategic',
            path: '/strategic',
            component: Strategic
        },        
        {
            name: 'sustentation',
            path: '/sustentation',
            component: Sustentation
        },        
        {
            name: 'erp',
            path: '/erp',
            component: Erp
        },        
        {
            name: 'quality',
            path: '/quality',
            component: Quality
        },        
        {
            name: 'design',
            path: '/design',
            component: Design
        },        
        {
            name: 'ux',
            path: '/ux',
            component: Ux
        },        
        {
            name: 'lowCode',
            path: '/lowCode',
            component: LowCode
        },        
        {
            name: 'inovaSIS',
            path: '/inovaSIS',
            component: InovaSIS
        }      
    ] 
});